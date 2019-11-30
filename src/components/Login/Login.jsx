import React from "react";
import style from "./Login.module.css";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Login = ({ isAuthorized, login, captchaURL }) => {
  if (isAuthorized) return <Redirect to="/profile" />;
  return (
    <div className={style.container}>
      <Typography variant="h2" component="h1" gutterBottom>
        Login
      </Typography>
      <LoginForm
        onSubmit={({ email, password, rememberMe, captchaText }) =>
          // login(email, password, rememberMe, captchaText)
          console.log(email, password, rememberMe, captchaText)
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

export default connect(mapStateToProps, { login })(Login);
