// --- Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// import domready from 'domready';
import Immutable from 'immutable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  IndexRoute,
  Route,
  hashHistory,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import { AppContainer as HotLoaderWrapper } from 'react-hot-loader';
// --- Local files.
import {
  App as Layout,
  Customers,
  Home,
} from '../containers';
import createStore from '../redux/create';

// Defaults
const state = Immutable.fromJS({});
const store = createStore(hashHistory, state);
const history = syncHistoryWithStore(hashHistory, store);

// Custom routes
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/customers" component={Customers} />
  </Route>
);

const renderApp = () => {
  const Root = require('../containers/Root/Root'); // eslint-disable-line global-require

  ReactDOM.render(
    <Root
      store={store}
      history={history}
      routes={routes}
    />,
    document.getElementById('root')
  );
};


injectTapEventPlugin(); // Only want to run this on instantiation
renderApp();
