import React, { Component } from 'react'
import cx from './index.module.scss'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import PestoPasta from '../../images/pesto-pasta.jpg'

export default class FeaturedRecipes extends Component {
  render () {
    // TODO fetch featured cards from DB with IDs
    const featuredIds = []
    return (
      <div className={ cx['featured-recipes'] }>
        <div className={ cx['featured-cards'] }>
          <Card title="Cookies" image={ PestoPasta } />
          <Card title="Pesto pasta" image={ PestoPasta } />
          <Card title="Cookies" image={ PestoPasta } />
        </div>
        <Link to="/browse">
          <button>Browse all recipes</button>
        </Link>
      </div>
    )
  }
}
