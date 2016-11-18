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
import { App as Layout, Customers, Home } from '../containers';
import createStore from '../redux/create';

// Defaults
const store = createStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);
const rootElement = document.getElementById('root');

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
    <HotLoaderWrapper>
      <Root
        history={history}
        routes={routes}
        store={store}
      />
    </HotLoaderWrapper>,
    rootElement
  );
};

domready(() => {
  injectTapEventPlugin(); // Only want to run this on instantiation
  renderApp();
});
