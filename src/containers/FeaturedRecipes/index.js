import React, { Component } from 'react'
import cx from './index.module.scss'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import PestoPasta from '../../images/pesto-pasta.jpg'
import Avocados from '../../images/avocados.jpg'

export default class FeaturedRecipes extends Component {
  render () {
    // TODO fetch featured cards from DB with IDs
    const featuredIds = []
    return (
      <div className={ cx['featured-recipes'] }>
        <div className={ cx['featured-cards'] }>
          <Card id="20" title="Cookies" image={ PestoPasta } />
          <Card id="21" title="Avocados" image={ Avocados } />
          <Card id="20" title="Pesto Pasta" image={ PestoPasta } />
        </div>
        <Link to="/browse">
          <button>Browse all recipes</button>
        </Link>
      </div>
    )
  }
}
