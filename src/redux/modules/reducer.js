// import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux-immutablejs';
import { reducer as reduxFormReducer } from 'redux-form/immutable' ;

import counter from './counter';
import greeting from './greeting';

export default combineReducers({
  routing: routerReducer,
  form: reduxFormReducer,
  counter,
  greeting,
});
