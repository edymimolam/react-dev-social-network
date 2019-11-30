import React from "react";
import style from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input, renderTextField, renderCheckbox } from "../common/Forms/Fields";
import { required, email, minLength2 } from "../../utils/validation";
import Button from "@material-ui/core/Button";

const LoginForm = ({ error, handleSubmit, submitting, captchaURL }) => {
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
      </div>

      <Field name="rememberMe" component={renderCheckbox} label="Remember me" />

      {error && (
        <div>
          <strong>{error}</strong>
        </div>
      )}

      {captchaURL && (
        <div>
          <img src={captchaURL} alt="captcha" />
          <Field name="captchaText" component={Input} type="text" />
        </div>
      )}

      {/* <button type="submit" disabled={submitting}>
        Submit
      </button> */}

      <Button
        type="submit"
        disabled={submitting}
        variant="contained"
        color="primary"
        size="large"
      >
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
