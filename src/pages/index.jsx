// --- Dependencies
import 'vaco-components-library/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IndexRoute, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer as HotLoaderWrapper } from 'react-hot-loader';
// --- Local files.
import {
  App,
  Customers,
  Home,
} from '../containers';
import createStore from '../redux/create';

// Defaults
const store = createStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);
const rootElement = document.getElementById('root');
let counter = 0;

// Custom routes
const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/customers" component={Customers} />
  </Route>
);

const renderApp = () => {
  const Root = require('../containers/Root/Root'); // eslint-disable-line global-require

  ReactDOM.render(
    <HotLoaderWrapper>
      <Root
        counter={counter}
        history={history}
        routes={routes}
        store={store}
      />
    </HotLoaderWrapper>,
    rootElement
  );
};

domready(() => {
  if (counter === 0) {
    // Only want to run this on instantiation
    injectTapEventPlugin();
  }
  renderApp();
});


if (__DEVELOPMENT__ && module.hot) {
  // Support hot reloading of components
  counter++; // eslint-disable-line no-plusplus
  module.hot.accept();
}
