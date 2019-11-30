import React from "react";
// import style from '../../Login/Login.module.css'
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const Input = ({
  input,
  label,
  meta: { touched, error, warning },
  ...props
}) => (
  <div>
    {label && <label>{label}</label>}
    <input {...input} {...props} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export const TextArea = ({
  input,
  label,
  meta: { touched, error, warning },
  ...props
}) => (
  <div>
    {label && <label>{label}</label>}
    <textarea {...input} {...props} />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
);
