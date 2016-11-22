// --- Dependencies
import React from 'react';
import { render } from 'react-dom';
// import domready from 'domready';
// import Immutable from 'immutable';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// Local files...
import {
  Layout,
  Customers,
  Home,
  DevTools,
} from '../containers';
// import getRoutes from '../routes';
import store from '../redux/store/store';

// const pageName = 'index';
const history = syncHistoryWithStore(hashHistory, store);
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/customers" component={Customers} />
  </Route>
);

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const documentRoot = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
      {__DEVELOPMENT__ ? <DevTools /> : null}
    </Router>
  </Provider>,
  documentRoot
);
