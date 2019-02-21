import React from 'react'
import cx from './index.module.scss'
import SignIn from '../../components/SignIn'
import SignUpImg from '../../images/sign-up-img.jpg'

const SignUp = props => (
  <div className={ cx['sign-up'] } id="SignUp">
    <img src={ SignUpImg } className={ cx['sign-up-img'] } />
    <h3>Start your<br/>own recipe box</h3>
    <div className={ cx['sign-in-container'] }>
      <SignIn />
    </div>
    <p>Cookie Jar is your digital recipe box, where you can store your favourite recipes. Donec suscipit rutrum lacinia. Donec dui erat, rutrum ut eros sed, molestie eleifend purus. Nulla ac dolor a lectus tristique fringilla. Maecenas eu pulvinar augue, at suscipit eros. </p>
  </div>
)

export default SignUp