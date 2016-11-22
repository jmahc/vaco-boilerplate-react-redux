import { REQUEST_CUSTOMERS, RECEIVE_CUSTOMERS, START_CUSTOMER_ADD, ADD_CUSTOMER } from '../constants';

export function receiveCustomers(customers) {
  return {
    type: RECEIVE_CUSTOMERS,
    customers,
  };
}

export function requestEmployees() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_CUSTOMERS,
    });

    fetch('http://uinames.com/api/?amount=5')
    .then(({ response }) => response.json())
    .then(({ customers }) => dispatch(receiveCustomers(customers)));
  };
}

export function startCustomerAdd() {
  return {
    type: START_CUSTOMER_ADD,
  };
}


export function addCustomer() {
  return (dispatch, getState) => {
    const form = getState().form;
    const customer = {
      firstName: form.CustomersForm.firstName.value,
      // surname: form.employee.surname.value,
    };
    dispatch({
      type: ADD_CUSTOMER,
      customer,
    });
  };
}
