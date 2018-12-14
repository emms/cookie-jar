import './RecipeInput.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const TextInput = ({ description, ...rest }) => (
  <label className="text-input">
    <span>{ description }</span>
    <input type="text" {...rest} />
  </label>
)

TextInput.propTypes = { description: PropTypes.string.isRequired }

export const ParagraphInput = ({ description, ...rest }) => (
  <label className="paragraph-input">
    <span>{ description }</span>
    <textarea name="paragraph-text" cols="50" rows="10" {...rest} />
  </label>
)

ParagraphInput.propTypes = { description: PropTypes.string.isRequired }


export class IngredientInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      amount: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      name: '',
      amount: ''
    })
  }

  render() {
    const { name, amount } = this.state
    return (
      <div className="ingredient-input">
        <TextInput description="Ingredient name" name="name" value={ name } onChange={ this.handleChange } />
        <TextInput description="Ingredient amount" name="amount" value={ amount } onChange={ this.handleChange } />
        <button type="button" onClick={ this.handleSubmit }>Add more ingredients</button>
      </div>
    )
  }
}

IngredientInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
}