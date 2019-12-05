import React from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { renderTextField, renderCheckbox } from "../../common/Forms/Fields";
import { makeStyles } from "@material-ui/core/styles";
import style from "../Profile.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexFlow: "column",
    "& > *": { marginBottom: theme.spacing(1) }
  }
}));

const ProfileInfoForm = ({
  handleSubmit,
  profileInfo: { contacts },
  submitProfileInfo,
  setEditMode,
  error,
  pristine,
  submitting
}) => {
  const classes = useStyles();

  return (
    <form
      onSubmit={handleSubmit(val => submitProfileInfo(val))}
      className={classes.root}
    >
      <Field name="fullName" component={renderTextField} label="Name" />

      <Field name="aboutMe" component={renderTextField} label="About me" />

      <Field
        name="lookingForAJob"
        component={renderCheckbox}
        label="Looking for a Job"
      />

      <Field
        name="lookingForAJobDescription"
        component={renderTextField}
        label="Job Description"
      />

      {Object.keys(contacts).map(key => {
        if (key === "vk" || key === "mainLink" || key === "website")
          return null;

        return (
          <Field
            name={`contacts.${key}`}
            type="text"
            component={renderTextField}
            label={key}
            key={`input-${key}`}
          />
        );
      })}

      {error && (
        <Typography color="error" variant="overline">
          {error}
        </Typography>
      )}

      <Button
        size="medium"
        variant="contained"
        color="primary"
        type="submit"
        fullwidth="false"
        disabled={pristine || submitting}
      >
        Save
      </Button>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => setEditMode(false)}
        className={style.editBtn}
      >
        Back
      </Button>
    </form>
  );
};

export default reduxForm({ form: "profile-info" })(ProfileInfoForm);
