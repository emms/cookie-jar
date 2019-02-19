import cx from './index.module.scss'
import React, { Component } from 'react'
import Hero from '../../components/Hero'
import FeaturedProjects from '../../containers/FeaturedProjects'
import SignUp from '../../containers/SignUp'

export default class Landing extends Component {
  render() {
    return (
      <div className={ cx['Landing'] }>
        <Hero />
        <FeaturedProjects />
        <SignUp />
      </div>
    )
  }
}
