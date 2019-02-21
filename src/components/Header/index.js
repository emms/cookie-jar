import cx from './index.module.scss'
import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { withRouter } from 'react-router'

const MenuLinks = props => (
  <React.Fragment>
    <Link to="/browse" className={ cx['nav-link'] } onClick={ props.onClick }>Browse</Link>
    <HashLink smooth to="/#SignUp" className={ cx['nav-link'] } onClick={ props.onClick }>Login / Sign in</HashLink>
  </React.Fragment>
)

const HamburgerMenu = props => (
  <button className={ props.classes } onClick={ props.onClick }>
    <div />
    <div />
    <div />
  </button>
)

class Header extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const headerClasses = classNames(
      cx['header'],
      this.props.location.pathname === "/" && cx['header--transparent'],
    )
    const menuClasses = classNames(
      cx['hamburger-menu'],
      this.state.menuOpen && cx['hamburger-menu--open'],
    )
    const navigationClasses = classNames(
      cx['navigation'],
      this.state.menuOpen && cx['navigation--open'],
    )
    return (
      <div className={ headerClasses }>
        <nav className={ navigationClasses }>
          <MenuLinks onClick={ this.toggleMenu } />
        </nav>
        <HamburgerMenu classes={ menuClasses } onClick={ this.toggleMenu } />
        <MenuLinks />
      </div>
    )
  }
}

export default withRouter(Header)