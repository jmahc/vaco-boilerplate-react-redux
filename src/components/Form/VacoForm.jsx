import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Input,
} from 'vaco-components-library/lib';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['firstName', 'lastName', 'email'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderInput = ({ input, label, meta: { touched, error }, isRequired, ...custom }) => (
  <Input
    label={label}
    required={isRequired}
    error={touched && error ? `This field, ${label}, is required.` : null}
    {...input}
    {...custom}
  />
);

// const renderCheckbox = ({ input, label }) => (
//   <Checkbox label={label}
//     checked={input.value ? true : false}
//     onCheck={input.onChange} />
// )
//
// const renderRadioGroup = ({ input, ...rest }) => (
//   <RadioButtonGroup {...input} {...rest}
//     valueSelected={input.value}
//     onChange={(event, value) => input.onChange(value)} />
// );
//
// const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
//   <SelectField
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     onChange={(event, index, value) => input.onChange(value)}
//     {...custom}
//   >
//     {children}
//   </SelectField>
// );

const VacoForm = ({ ...props }) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={renderInput} label="First Name" />
      </div>
      <div>
        <Field name="lastName" component={renderInput} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderInput} label="Email" />
      </div>
      <div>
        <Button
          primary
          raised
          ripple
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </Button>
        <Button
          primary
          raised
          ripple
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </Button>
      </div>
    </form>
  );
};

VacoForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'Customers',  // a unique identifier for this form
  validate,
})(VacoForm);
