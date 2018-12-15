import cx from './Background.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Background = () => (
  <div className={ cx['background'] }>
    <Link to="/" className={ cx['title'] }>COOKIE JAR</Link>
    <Link to="/" className={ cx['nav-link'] }>Browse recipes</Link>
    <Link to="/add-recipe" className={ cx['nav-link'] }>Add recipe</Link>
  </div>
)

export default Background