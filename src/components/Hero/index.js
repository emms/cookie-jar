import React from 'react'
import cx from './index.module.scss'

const Hero = props => (
  <div className={ cx['hero'] }>
    <div className={ cx['content'] }>
      <div className={ cx['logo-container'] }>
        <div>
          <h1 className={ cx['title-first-row'] }>COOKIE</h1>
          <h1 className={ cx['title-second-row'] }>JAR</h1>
        </div>
        <div className={ cx['logo-vector'] } />
      </div>
      <h2 className={ cx['subtitle'] }>Your digital recipe box</h2>
    </div>
  </div>
)

export default Hero