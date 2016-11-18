import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import {
  Button,
  Input,
} from 'vaco-components-library/lib';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (values.phones && values.phones.length > 3) {
    errors.phones = [];
    errors.phones._error = 'Too many phone fields!';
  }
  return errors;
};

const renderInput = ({ input, label, meta: { touched, error }, isRequired, ...custom }) => (
  <Input
    label={label}
    required={isRequired}
    error={touched && error ? `This field, ${label}, is required.` : null}
    {...custom}
  />
);

// const renderPhones = ({ fields }) => (
//   <ul>
//     <li>
//       <Button onClick={() => fields.push()}>Add Phone</Button>
//     </li>
//   </ul>
//   <Input
//     label={label}
//     required={isRequired}
//     error={touched && error ? `This field, ${label}, is required.` : null}
//     {...custom}
//   />
// );

// renderInput.propTypes = {

// }

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

let VacoForm = (props) => {
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
        <Field name="phone" component={renderInput} label="Phone" />
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

// The order of the decoration does not matter.

// Decorate with redux-form
VacoForm = reduxForm({
  form: 'CustomersForm',  // A unique identifier for this form / name for the form and key to
                          // where your form's state will be mounted.
  fields: ['firstName', 'lastName', 'email', 'phone'],
  validate,
})(VacoForm);

// Decorate with connect to read form values
const selector = formValueSelector('CustomersForm'); // same as form name
VacoForm = connect(
  (state) => {
    // can select values individually
    // --- const hasEmailValue = selector(state, 'hasEmail')
    // --- const favoriteColorValue = selector(state, 'favoriteColor')
    // or together as a group
    const { firstName, lastName, email, phone } = selector(state, 'firstName', 'lastName', 'email', 'phone');
    return {
      fullName: `${firstName || ''} ${lastName || ''}`,
      email: `${email}`,
      phone: `${phone}`,
    };
  }
)(VacoForm);

export default VacoForm;
