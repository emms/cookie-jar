import React from 'react'
import cx from './index.module.scss'

const TextInput = props => (
  <input type="text" placeholder={ props.placeholder } className={ cx['text-input'] } />
)

export default TextInput