import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from '../DevTools/DevTools';

const Root = ({ ...props }) => (
  <Provider store={props.store}>
    <Router key={props.counter} history={props.history} routes={props.routes}>
      {__DEVELOPMENT__ ? <DevTools /> : null}
    </Router>
  </Provider>
);

Root.propTypes = {
  counter: PropTypes.number,
  history: PropTypes.object,
  routes: PropTypes.object,
  store: PropTypes.object,
};

export default Root;
