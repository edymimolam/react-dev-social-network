import React from "react";
import style from "./Login.module.css";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

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
      <Paper className={style.credentials}>
        <Typography variant="h5" gutterBottom>
          Testing Credentials
        </Typography>
        <Typography component="div" gutterBottom>
          <Box fontWeight="fontWeightBold" component="span">
            Email:
          </Box>
          <Box component="span" className={style.credential}>
            free@samuraijs.com
          </Box>
        </Typography>
        <Typography component="div" gutterBottom>
          <Box fontWeight="fontWeightBold" component="span">
            Password:
          </Box>
          <Box component="span" className={style.credential}>
            free
          </Box>
        </Typography>
      </Paper>
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
