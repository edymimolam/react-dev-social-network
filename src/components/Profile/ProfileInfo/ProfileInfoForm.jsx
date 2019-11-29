import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, TextArea } from "../../common/Forms/Fields";

const ProfileInfoForm = ({
  handleSubmit,
  profileInfo: { contacts },
  submitProfileInfo,
  error
}) => {
  const submit = values => console.log(values);
  return (
    <form onSubmit={handleSubmit(val => submitProfileInfo(val))}>
      <h1>Form</h1>

      <Field name="fullName" type="text" component={Input} label="Name: " />

      <Field
        name="aboutMe"
        type="text"
        component={TextArea}
        label="About me: "
      />

      <Field
        name="lookingForAJob"
        type="checkbox"
        component={Input}
        label="Looking for a Job: "
      />

      <Field
        name="lookingForAJobDescription"
        type="text"
        component={TextArea}
        label="Job Description: "
      />

      <div>
        <b>contacts</b>
        {Object.keys(contacts).map(key => (
          <Field
            name={`contacts.${key}`}
            type="text"
            component={Input}
            label={`${key}: `}
            key={`input-${key}`}
          />
        ))}
      </div>

      {error && (
        <div>
          <strong>{error}</strong>
        </div>
      )}

      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "profile-info" })(ProfileInfoForm);
