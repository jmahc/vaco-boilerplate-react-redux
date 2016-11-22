import React, { PropTypes } from 'react';
import { AppContainer } from 'react-hot-loader';

import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { DevTools } from '../containers';

const Root = ({ ...props }) => (
  <AppContainer>
    <Provider store={props.store}>
      <Router history={props.history} routes={props.routes}>
        {__DEVELOPMENT__ ? <DevTools /> : null}
      </Router>
    </Provider>
  </AppContainer>
);

Root.propTypes = {
  history: PropTypes.object,
  routes: PropTypes.object,
  store: PropTypes.object,
};

export default Root;
