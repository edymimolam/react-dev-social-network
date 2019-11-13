import React from 'react'
import style from './Login.module.css'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'


const Login = ({ isAuth, logIn }) => {

  if (isAuth) return <Redirect to='/profile' />

  return <div className={style.container}>
    <h1>Login</h1>
    <LoginForm onSubmit={({ email, password, rememberMe }) => logIn(email, password, rememberMe)} />
  </div>
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (email, password, rememberMe) => { dispatch(login(email, password, rememberMe)) }
})

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuthorized })


export default connect(mapStateToProps, mapDispatchToProps)(Login)