import cloudinary from 'cloudinary'
import pgPromise from 'pg-promise'
import pgFormat from 'pg-format'

const pgp = pgPromise()
const db = pgp(process.env.DATABASE_URL)

function uploadImage(image) {
  cloudinary.v2.uploader.upload('http://www.example.com/image.jpg', (error, result) => {
    console.log(result, error)
  })
}

export async function postRecipe(recipe) {
  const { name, time, instructions, ingredients, image } = recipe

  try {
    uploadImage(image)
    const data = await db.tx(async t => {
      const recipeQuery = await t.one('INSERT INTO recipes(name, time, instructions) VALUES ($1, $2, $3) RETURNING id', [ name, time, instructions ])
      const ingredientsArr = ingredients.map(i => [i.name, i.amount, recipeQuery.id])
      // TODO is pg-format necessary? 
      const ingredientQuery = await t.none(pgFormat('INSERT INTO ingredients(name, amount, parent_recipe_id) VALUES %L', ingredientsArr))
      return t.batch([recipeQuery, ingredientQuery])
    })
    console.log('success', data)
  } catch (error) {
    console.log('error', error)
  }
}

export async function getRecipe(recipeId) {
  try {
    const [recipe, ingredients] = await db.task(async t => {
      const recipeQuery = await t.one('SELECT * FROM recipes WHERE id = $1', recipeId)
      const ingredientQuery = await t.any('SELECT * FROM ingredients WHERE parent_recipe_id = $1', recipeId)
      return t.batch([recipeQuery, ingredientQuery])
    })
    return {
      ...recipe,
      ingredients,
    }
  } catch (error) {
    console.log('error', error)
  }
}

export async function getAllRecipes() {
  try {
    return await db.any('SELECT * FROM recipes')
  } catch (error) {
    console.log('error', error)
  }
}