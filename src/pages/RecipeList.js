import React, { Component } from 'react'
import { get } from '../api'
import { API_URL } from '../config'
import { sleep } from '../utils'
import { Link } from 'react-router-dom'

async function getRecipes() {
  const res = await get(`${API_URL}/recipes`)
  if (res.status === 200) {
    return res.json()
  }
  // if request fails, try getting recipes again after 5 seconds
  await sleep(5000)
  return getRecipes()
}

class RecipeList extends Component {
  state = {
    recipes: []
  }

  async componentDidMount() {
    const recipes = await getRecipes()
    this.setState({ recipes })
  }

  render() {
    return (
      <div>
        <h2>Browse recipes</h2>
        { this.state.recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} className="browse__recipe" key={ recipe.id }>
            <img src={ recipe.image_url } alt="" />
            <span>{recipe.name}</span>
            <span>{recipe.time}</span>
          </Link>
        )) }
      </div>
    )
  }
}

export default RecipeList