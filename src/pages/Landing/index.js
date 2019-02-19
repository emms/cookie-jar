import cx from './index.module.scss'
import React, { Component } from 'react'
import Hero from '../../components/Hero'
import FeaturedRecipes from '../../containers/FeaturedRecipes'
import SignUp from '../../containers/SignUp'

export default class Landing extends Component {
  render() {
    return (
      <div className={ cx['landing'] }>
        <div className={ cx['hero-container'] }>
          <Hero />
        </div>
        <FeaturedRecipes />
        <SignUp />
      </div>
    )
  }
}
