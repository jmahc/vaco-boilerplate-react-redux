import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
// import {
//   Field,
//   // formValueSelector,
//   reduxForm,
// } from 'redux-form/immutable';
import {
  Button,
  Input,
} from 'vaco-components-library/lib';

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'firstName',
    // 'lastName',
    // 'email',
    // 'phone',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  // if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
  // if (values.phones && values.phones.length > 3) {
  //   errors.phones = [];
  //   errors.phones._error = 'Too many phone fields!';
  // }
  return errors;
};

/* eslint-disable react/prop-types */
const renderInput = ({
  input,
  label,
  meta: { touched, error },
  isRequired,
  ...custom
}) => (
  <Input
    label={label}
    required={isRequired}
    error={touched && error ? `This field, ${label}, is required.` : null}
    {...input}
    {...custom}
  />
);
/* eslint-enable react/prop-types */

let VacoForm = ({ handleSubmit, pristine, reset, submitting, fields: { firstName } }) => ( // eslint-disable-line no-unused-vars
  <form onSubmit={handleSubmit}>
    <div>
      <Field name="firstName" component={renderInput} label="First Name" />
    </div>
    {/* <div>
      <Field name="lastName" component={renderInput} label="Last Name" />
    </div>
    <div>
      <Field name="email" component={renderInput} label="Email" />
    </div>
    <div>
      <Field name="phone" component={renderInput} label="Phone" />
    </div> */}
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

VacoForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
};

// The order of the decoration does not matter.

// Decorate with redux-form
VacoForm = reduxForm({
  form: 'CustomersForm',  // A unique identifier for this form / name for the form and key to
                          // where your form's state will be mounted.
  fields: [
    'firstName',
    // 'lastName',
    // 'email',
    // 'phone',
  ],
  validate,
})(VacoForm);

// // Decorate with connect to read form values
const selector = formValueSelector('CustomersForm'); // same as form name
console.log('Selector is: ');
console.info(selector);
VacoForm = connect(
  (state) => {
    // can select values individually
    // --- const hasEmailValue = selector(state, 'hasEmail');
    // --- const favoriteColorValue = selector(state, 'favoriteColor');
    // or together as a group
    // --- const { firstName, lastName } = selector(state, 'firstName', 'lastName');
    const { firstName /* , lastName, email, phone*/ } = selector(state, 'firstName',
    'lastName', 'email', 'phone');
    console.log('Selector has the following values:     ----->');
    console.info(firstName);
    // console.info(lastName);
    // console.info(email);
    // console.info(phone);

    return {
      firstName,
      // fullName: `${firstName || ''} ${lastName || ''}`,
      // email: `${email}`,
      // phone: `${phone}`,
    };
  }
)(VacoForm);

// export default VacoForm;
