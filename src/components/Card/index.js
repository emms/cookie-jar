import React from 'react'
import cx from './index.module.scss'
import { Link } from 'react-router-dom'

const Card = props => (
  <Link to={ `/recipe/${props.id}` }>
    <div className={ cx['card'] }>
      <div className={ cx['image-container'] }>
        <img src={ props.image } alt="" />
      </div>
      <div className={ cx['titlebar'] }>
        <span>{ props.title }</span>
      </div>
    </div>
  </Link>
)

export default Card