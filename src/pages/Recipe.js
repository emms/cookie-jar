import React, { Component } from 'react'
import { get } from '../api'
import { API_URL } from '../config'
import { sleep } from '../utils'

async function getRecipe(id) {
  const res = await get(`${API_URL}/recipe/${id}`)
  if (res.status === 200) {
    return res.json()
  }
  // if request fails, try getting recipe again after 5 seconds
  await sleep(5000)
  return getRecipe(id)
}

export default class Recipe extends Component {
  state = {
    recipe: {}
  }

  async componentDidMount() {
    const recipe = await getRecipe(this.props.match.params.id)
    this.setState({ recipe })
  }

  render() {
    const { recipe } = this.state
    return (
      <div>
        <div className="recipe" key={recipe.id}>
          <img src={ recipe.image_url } alt="" />
          <span>{ recipe.name }</span>
          <span>{ recipe.time }</span>
          { recipe.ingredients && recipe.ingredients.map(ingredient => (
            <div className="recipe__ingredients" key={ ingredient.id }>
              <span>{ ingredient.name }</span>
              <span>{ ingredient.amount }</span>
            </div>
          ))}
          <span>{ recipe.instructions }</span>
        </div>
      </div>
    )
  }
}
