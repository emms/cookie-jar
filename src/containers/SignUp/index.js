import React from 'react'
import cx from './index.module.scss'
import SignIn from '../../components/SignIn'

const SignUp = props => (
  <div className={ cx['sign-up'] }>
    <h3>Open your own cookie jar</h3>
    <div className={ cx['sign-in-container'] }>
      <SignIn />
    </div>
    <p>Cookie Jar is your digital recipe box, where you can store your favourite recipes. Donec suscipit rutrum lacinia. Donec dui erat, rutrum ut eros sed, molestie eleifend purus. Nulla ac dolor a lectus tristique fringilla. Maecenas eu pulvinar augue, at suscipit eros. Nullam sit amet justo rhoncus, bibendum elit ut, tincidunt dolor. Morbi rutrum mi quis nunc feugiat consequat.</p>
  </div>
)

export default SignUp