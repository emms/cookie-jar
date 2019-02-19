import cx from './index.module.scss'
import React, { Component } from 'react'
import Hero from '../../components/Hero'
import FeaturedRecipes from '../../containers/FeaturedRecipes'
import SignUp from '../../containers/SignUp'

export default class Landing extends Component {
  render() {
    return (
      <div className={ cx['Landing'] }>
        <Hero />
        <FeaturedRecipes />
        <SignUp />
      </div>
    )
  }
}
