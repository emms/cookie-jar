import cx from './index.module.scss'
import React from 'react'
import Card from '../../components/Card'
import SweetPotatoSoup from '../../images/sweet-potato-soup.jpg'
import Drinks from '../../images/drinks.jpg'
import Avocadoes from '../../images/avocadoes.jpg'
import Dessert from '../../images/dessert.jpg'
import Snacks from '../../images/snacks.jpg'

const Categories = props => {
  return (
    <div className={ cx['categories'] }>
      <Card linkTo="/category/snacks" title="Snacks" image={ Snacks } />
      <Card linkTo="/category/mains" title="Mains" image={ SweetPotatoSoup } />
      <Card linkTo="/category/desserts" title="Desserts" image={ Dessert } />
      <Card linkTo="/category/drinks" title="Drinks" image={ Drinks } />
      <Card linkTo="/category/sides" title="Sides" image={ Avocadoes } />      
    </div>
  )
}

export default Categories
