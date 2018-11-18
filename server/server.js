import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { postRecipe, getRecipe, getAllRecipes } from './database'

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/recipe', async (req, res) => {
  await postRecipe(req.body)
  res.sendStatus(200)
})

app.get('/recipe', async (req, res) => {
  const recipe = await getRecipe(12)
  res.json(recipe)
})

app.get('/recipes', async (req, res) => {
  const recipes = await getAllRecipes()
  res.json(recipes)
})

app.listen(process.env.PORT || 3001, () => console.log('Server listening!'))