import React, { Component } from 'react'
import { TextInput, ParagraphInput, IngredientInput } from '../components/RecipeInput'
import { API_URL } from '../config'
import { post } from '../api'
import Dropzone from 'react-dropzone'
import { getDataUrl, resizeDataUrl } from '../utils'

class AddRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [],
      instructions: '',
      time: '',
      name: '',
      image: ''
    }
  }

  addIngredient = ingredient => {
    this.setState({
      ingredients: [...this.state.ingredients, ingredient]
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleDrop = async ([acceptedFile]) => {
    try {
      const dataUrl = await getDataUrl(acceptedFile)
      const image = await resizeDataUrl(dataUrl)
      this.setState({ image })
    } catch (e) {
      alert('Failed to load image. Try uploading a smaller image!')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const apiUrl = API_URL + '/recipe'
    post(apiUrl, this.state)
  }

  render() {
    const { name, time, ingredients, instructions,  } = this.state
    return (
      <div className="add-recipe">
        <h2>Add a new recipe</h2>
        <form onSubmit={ this.handleSubmit }>
          <TextInput description="Recipe name" name="name" value={ name } onChange={ this.handleChange } />
          <TextInput description="Time required to make the recipe" name="time" value={ time } onChange={ this.handleChange } />
          <Dropzone onDrop={ this.handleDrop } multiple={ false } />
          <div>
            <p>Ingredients:</p>
            { ingredients.map((ingredient, i) => (
              <div key={ i }>
                <span>{ ingredient.name }</span>
                <span>{ ingredient.amount }</span>
              </div>
              )
            ) }
            <IngredientInput onSubmit={ this.addIngredient }/>
          </div>
          <ParagraphInput description="Recipe instructions" name="instructions" value={ instructions } onChange={ this.handleChange }/>
          <button>Submit recipe</button>
        </form>
      </div>
    )
  }
}

export default AddRecipe
