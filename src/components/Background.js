import './Background.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Background = () => (
  <div className="background">
    <h1>COOKIE JAR</h1>
    <Link to="/">Browse recipes</Link>
    <Link to="/add-recipe">Add recipe</Link>
  </div>
)

export default Background