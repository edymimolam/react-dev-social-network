import React from 'react'
import style from '../../Login/Login.module.css'

export const Input = ({ input, meta: { touched, error, warning }, ...props }) => (
  <div styleName={style.inputDiv}>
    <input {...input} {...props} />
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
)
