import { connect } from 'react-redux';
import React from 'react';
import { addCustomer } from 'redux/modules/customers';
import { VacoForm } from 'components';

const CustomerFormContainer = () => (
  <VacoForm {...this.props} />
);


const mapDispatchToProps = ({ dispatch }) => ({
  addCustomer: () => dispatch(addCustomer()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(CustomerFormContainer);
