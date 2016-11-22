import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
// import { combineReducers } from 'redux-immutablejs';
// import { reducer as reduxFormReducer } from 'redux-form/immutable' ;
import {
  RECEIVE_EMPLOYEES,
  REQUEST_EMPLOYEES,
  START_EMPLOYEE_ADD,
  ADD_EMPLOYEE,
} from './constants';

// import forms from './forms';
import counter from './modules/counter';
import greeting from './modules/greeting';

function mainReducer(state = {
  employees: [],
  loadingEmployees: true,
  addingEmployee: false,
}, action) {
  switch (action.type) {
    case RECEIVE_EMPLOYEES:
      return Object.assign({}, state, {
        employees: action.employees,
        loadingEmployees: false,
      });
    case REQUEST_EMPLOYEES:
      return Object.assign({}, state, {
        loadingEmployees: true,
      });
    case START_EMPLOYEE_ADD:
      return Object.assign({}, state, {
        addingEmployee: true,
      });
    case ADD_EMPLOYEE:
      return Object.assign({}, state, {
        addingEmployee: false,
        employees: [
          ...state.employees,
          action.employee,
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
