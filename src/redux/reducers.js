import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
// import { combineReducers } from 'redux-immutablejs';
// import { reducer as reduxFormReducer } from 'redux-form/immutable' ;
import {
  RECEIVE_CUSTOMERS,
  REQUEST_CUSTOMERS,
  START_CUSTOMER_ADD,
  ADD_CUSTOMER,
} from './constants';

// import forms from './forms';
import counter from './modules/counter';
import greeting from './modules/greeting';

function mainReducer(state = {
  customers: [],
  loadingCustomers: true,
  addingCustomer: false,
}, action) {
  switch (action.type) {
    case RECEIVE_CUSTOMERS:
      return Object.assign({}, state, {
        customers: action.customers,
        loadingCustomers: false,
      });
    case REQUEST_CUSTOMERS:
      return Object.assign({}, state, {
        loadingCustomers: true,
      });
    case START_CUSTOMER_ADD:
      return Object.assign({}, state, {
        addingCustomer: true,
      });
    case ADD_CUSTOMER:
      return Object.assign({}, state, {
        addingCustomer: false,
        customers: [
          ...state.customers,
          action.customer,
        ],
      });
    default:
      return state;
  }
}


export default combineReducers({
  counter,
  greeting,
  main: mainReducer,
  form: formReducer,
  routing: routerReducer,
});
