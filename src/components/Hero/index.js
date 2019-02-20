import React from 'react'
import cx from './index.module.scss'
import HeroImage from '../../images/hero.png'

const Hero = props => (
  <div className={ cx['hero'] }>
    <img src={ HeroImage } className={ cx['hero-image'] } alt="" />
    <div className={ cx['content'] }>
      <div className={ cx['logo-container'] }>
        <div>
          <h1 className={ cx['title-first-row'] }>&nbsp;RECIPE</h1>
          <h1 className={ cx['title-second-row'] }>BOX</h1>
        </div>
      </div>
      <h2 className={ cx['subtitle'] }>Your cooking<br/>headaches,<br/>solved.</h2>
    </div>
  </div>
)

export default Hero