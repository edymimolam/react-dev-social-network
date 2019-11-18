import React from 'react'
import style from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/Forms/Fields'
import { required, email, minLength2 } from '../../utils/validation'

const LoginForm = ({ error, handleSubmit, submitting, captchaURL }) => {
  
  return <form onSubmit={handleSubmit} className={style.form}>

    <Field
      name="email"
      component={Input}
      type="text"
      placeholder="Email"
      validate={[required, email]}
    />

    <Field
      name="password"
      component={Input}
      type="password"
      placeholder="Password"
      validate={[required, minLength2]}
    />

    <Field name="rememberMe" component={Input} type="checkbox" className={style.checkbox} />

    {error && <div><strong>{error}</strong></div>}

    {captchaURL && <div>
      <img src={captchaURL} />
      <Field name="captchaText" component={Input} type="text"/>
    </div>}

    <button type="submit" disabled={submitting}>Submit</button>

  </form>
}

export default reduxForm({ form: 'login' })(LoginForm)