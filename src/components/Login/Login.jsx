import React from "react";
import style from "./Login.module.css";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const Login = ({ isAuth, logIn, captchaURL }) => {
  if (isAuth) return <Redirect to="/profile" />;

  return (
    <div className={style.container}>
      <h1>Login</h1>

      <LoginForm
        onSubmit={({ email, password, rememberMe, captchaText }) => {
          debugger;
          return logIn(email, password, rememberMe, captchaText);
        }}
        captchaURL={captchaURL}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthorized,
  captchaURL: state.auth.captchaURL
});

export default connect(mapStateToProps, login)(Login);
