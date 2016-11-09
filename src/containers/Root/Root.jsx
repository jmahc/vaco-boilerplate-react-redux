import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const Root = ({
  history,
  routes,
  store,
}) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object,
  routes: PropTypes.object,
  store: PropTypes.object,
};

export default Root;
