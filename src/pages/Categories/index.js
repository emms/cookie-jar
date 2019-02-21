import cx from './index.module.scss'
import React from 'react'
import Card from '../../components/Card'
import SweetPotatoSoup from '../../images/sweet-potato-soup.jpg'

const Categories = props => {
  return (
    <div className={ cx['categories'] }>
      <Card id="21" title="Snacks" image={ SweetPotatoSoup } />
      <Card id="21" title="Mains" image={ SweetPotatoSoup } />
      <Card id="21" title="Desserts" image={ SweetPotatoSoup } />
      <Card id="21" title="Drinks" image={ SweetPotatoSoup } />
      <Card id="21" title="Sides" image={ SweetPotatoSoup } />      
    </div>
  )
}

export default Categories
