// --- Dependencies
import React from 'react';
import { render } from 'react-dom';
// import domready from 'domready';
// import Immutable from 'immutable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// Local files...
import Root from '../shared/Root';
import getRoutes from '../routes';
import store from '../redux/store/store';

const pageName = 'index';
const history = syncHistoryWithStore(hashHistory, store);
const routes = getRoutes(pageName);

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
const documentRoot = document.getElementById('root');

render(
  <Root store={store} history={history} routes={routes} />,
  documentRoot
);

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept('./index.jsx');
}
