import React from 'react'
// import style from '../../Login/Login.module.css'

export const Input = ({ input, label, meta: { touched, error, warning }, ...props }) => (
  <div>
    {label && <label>{label}</label>}
    <input {...input} {...props} />
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
)

export const TextArea = ({ input, label, meta: { touched, error, warning }, ...props }) => (
  <div>
    {label && <label>{label}</label>}
    <textarea {...input} {...props} />
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
)
