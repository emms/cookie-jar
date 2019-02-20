import cx from './index.module.scss'
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { withRouter } from 'react-router'

const Header = props => {
  const classes = classNames(
    cx['header'],
    props.location.pathname === "/" && cx['header--transparent'],
  )
  return (
    <div className={ classes }>
      <Link to="/browse" className={ cx['nav-link'] }>Browse recipes</Link>
      <HashLink smooth to="/#SignUp" className={ cx['nav-link'] }>Login / Sign in</HashLink>
    </div>
  )
}

export default withRouter(Header)