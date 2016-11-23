// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// <><><><><><><><><><>       IMPORTS        <><><><><><><><><><><><><><><>
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
// -----------
// Dependencies
//
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
// import domready from 'domready';
// import Immutable from 'immutable';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// -----------
// Local files
//
import Root from '../shared/Root';
import getRoutes from '../routes';
import store from '../redux/store/store';
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// ---------------------
// Defaults
// ---------------------
//
const pageName = 'index';
const documentRoot = document.getElementById('root');

// ---------------------
// Redux + Router
// ---------------------
//
const history = syncHistoryWithStore(hashHistory, store);
const routes = getRoutes(pageName);

// ---------------------
// Needed for onTouchTap
// ---------------------
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
//
injectTapEventPlugin();

// ---------------------
// Method that renders the application.
// ---------------------
// Mounts the `<Root />` component onto the document's root element, `div#id`.
//
const renderApp = () => render(
  <Root store={store} history={history} routes={routes} />,
  documentRoot
);

renderApp();

// ---------------------
// Hot Module Reloading.
// ---------------------
// NOTE: This has not been implemented! Testing this now...
// TODO: Experiment with this - particularly the files that are accepted.
//
if (__DEVELOPMENT__ && module.hot) {
  // NOTE: use this to test..
  // const testWithThisFileName = '';

  module.hot.accept(() => {
    unmountComponentAtNode(documentRoot);

    renderApp();
  });
}
