import React from "react";
import { Form, Field } from "react-final-form";
import Validator from "validator";
import _ from "lodash";

const Login = (props) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const validate = (formValues) => {
    const errors = {};
    // email

    if (formValues.email && !Validator.isEmail(formValues.email))
      errors.email = "Enter correct email";
    if (!formValues.email) errors.email = "Email should not be empty";
    if (formValues.password && formValues.password.length < 5)
      errors.password = "Password should be at minimum of 5 character long";
    if (!formValues.password) errors.password = "Password should not be empty";
    return errors;
  };
  const renderError = (meta) => {
    if (meta.touched && meta.error)
      return <div className="ui pointing red basic label">{meta.error}</div>;
    return undefined;
  };

  return (
    <Form onSubmit={onSubmit} validate={validate}>
      {({ handleSubmit, errors, submitting, form }) => (
        <div>
          <form
            onSubmit={async (evt) => {
              await handleSubmit(evt);
              form.reset();
            }}
            className="ui fluid form error"
          >
            <Field name="email">
              {({ input, meta }) => (
                <div className="field">
                  <label>Email</label>
                  <input type="text" {...input} autoComplete="off" />
                  {renderError(meta)}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div className="field">
                  <label>Password</label>
                  <input type="password" {...input} autoComplete="off" />
                  {renderError(meta)}
                </div>
              )}
            </Field>
            <div>
              <button
                disabled={!_.isEmpty(errors) || submitting}
                className="ui button primary form-button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Form>
  );
};

export default Login;
