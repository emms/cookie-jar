import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { postRecipe, getRecipe } from './database'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/recipe', async (req, res) => {
  postRecipe(req.body)
  res.sendStatus(200)
})


app.get('/recipe', async (req, res) => {
  const recipe = await getRecipe(12)
  res.json(recipe)
})

app.listen(process.env.PORT || 3001, () => console.log('Server listening!'))