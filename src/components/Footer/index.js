import React from 'react'
import cx from './index.module.scss'

const Footer = props => (
  <footer className={ cx['footer'] }>
    <p>
      Made with ♥ by <a href="http://github.com/emms" target="_blank" rel="noopener noreferrer">emms</a>
    </p>
  </footer>
)

export default Footer