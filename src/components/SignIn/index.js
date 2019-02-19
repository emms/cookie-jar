import React from 'react'
import cx from './index.module.scss'
import TextInput from '../TextInput'

const SignIn = props => (
  <div className={ cx['sign-in'] }>
    <TextInput placeholder="Enter your email" />
    <TextInput placeholder="Enter your password" />
    <div className={ cx['buttons'] }>
      <button>Log in</button>
      <button>Sign in</button>
    </div>
  </div>
)

export default SignIn