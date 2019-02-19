import cx from './index.module.scss'
import React, { Component } from 'react'
import { get } from '../../api'
import { API_URL } from '../../utils/config'
import { sleep } from '../../utils/utils'

async function getRecipe(id) {
  const res = await get(`${API_URL}/recipe/${id}`)
  if (res.status === 200) {
    return res.json()
  }
  // if request fails, try getting recipe again after 5 seconds
  await sleep(5000)
  return getRecipe(id)
}

const Ingredients = ({ ingredients }) => (
  <div className={ cx['recipe-ingredients'] }>
    <h3>Ingredients</h3>
    { ingredients && ingredients.map(ingredient => (
      <div className={ cx['recipe-ingredients-listitem'] } key={ ingredient.id }>
        <span className={ cx['recipe-ingredients-amount'] }>{ ingredient.amount }</span>
        <span className={ cx['recipe-ingredients-name'] }>{ ingredient.name }</span>
      </div>
    ))}
  </div>
)

const Instructions = ({ instructions }) => (
  <div className={ cx['recipe-instructions'] }>
    <h3>Instructions</h3>
    <p className={ cx['recipe-instructions-text'] }>{ instructions }</p>
  </div>
)

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
      <div className={ cx['recipe-page'] } key={recipe.id}>
        <div className={ cx['recipe-image'] } style={ { backgroundImage: `url(${recipe.image_url})` } } />
        <div className={ cx['recipe-texts'] }>
          <h2 className={ cx['recipe-name'] }>{ recipe.name }</h2>
          <span>{ recipe.time }</span>
          <Ingredients ingredients={ recipe.ingredients } />
          <Instructions instructions={ recipe.instructions } />
        </div>
      </div>
    )
  }
}
