import React from "react";
import style from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { renderTextField, renderCheckbox } from "../common/Forms/Fields";
import { required, email, minLength2 } from "../../utils/validation";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const LoginForm = ({
  error,
  handleSubmit,
  pristine,
  submitting,
  captchaURL
}) => {
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.buttons}>
        <Field
          name="email"
          component={renderTextField}
          variant="outlined"
          margin="normal"
          type="text"
          label="Email"
          fullWidth={true}
          validate={[required, email]}
        />

        <Field
          name="password"
          component={renderTextField}
          variant="outlined"
          margin="normal"
          type="password"
          label="Password"
          fullWidth={true}
          validate={[required, minLength2]}
        />
        {captchaURL && (
          <div>
            <img
              src={captchaURL}
              alt="captcha"
              className={style.captchaImage}
            />
            <Field
              name="captchaText"
              component={renderTextField}
              margin="normal"
              label="captcha"
              fullWidth={true}
            />
          </div>
        )}
      </div>
      <Field name="rememberMe" component={renderCheckbox} label="Remember me" />
      {error && (
        <Typography color="error" variant="overline">
          {error}
        </Typography>
      )}
      <Button
        size="large"
        variant="contained"
        color="primary"
        type="submit"
        disabled={pristine || submitting}
      >
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
