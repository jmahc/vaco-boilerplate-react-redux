import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
// import { combineReducers } from 'redux-immutablejs';
// import { reducer as reduxFormReducer } from 'redux-form/immutable' ;

// import forms from './forms';
import counter from './modules/counter';
import greeting from './modules/greeting';

export default combineReducers({
  counter,
  greeting,
  form: formReducer,
  routing: routerReducer,
});
