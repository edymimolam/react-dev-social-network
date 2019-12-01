import React from "react";
import style from "./Login.module.css";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Login = ({ isAuthorized, logIn, captchaURL }) => {
  if (isAuthorized) return <Redirect to="/profile" />;
  return (
    <div className={style.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Login
      </Typography>
      <LoginForm
        onSubmit={({ email, password, rememberMe, captchaText }) =>
          logIn(email, password, rememberMe, captchaText)
        }
        captchaURL={captchaURL}
      />
    </div>
  );
};

const mapStateToProps = ({ auth: { isAuthorized, captchaURL } }) => ({
  isAuthorized,
  captchaURL
});

const mapDispatchToProps = dispatch => ({
  logIn: (email, password, rememberMe, captchaText) => {
    dispatch(login(email, password, rememberMe, captchaText));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
