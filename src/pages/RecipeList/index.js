import cx from './index.module.scss'
import React, { Component } from 'react'
import { get } from '../../api'
import { API_URL } from '../../utils/config'
import { sleep } from '../../utils/utils'
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

export default class RecipeList extends Component {
  state = {
    recipes: []
  }

  async componentDidMount() {
    const recipes = await getRecipes()
    this.setState({ recipes })
  }

  render() {
    return (
      <div className={ cx['recipe-list'] }>
        { this.state.recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} className={ cx.recipe } key={ recipe.id } style={ { backgroundImage: `url(${recipe.image_url})` } }>
            <div className={ cx['recipe-overlay-container'] }>
              <div className={ cx['recipe-name'] }>{recipe.name}</div>
              <div className={ cx['recipe-time'] }>{recipe.time}</div>
              <div className={ cx['recipe-overlay'] } />
            </div>
          </Link>
        )) }
      </div>
    )
  }
}
