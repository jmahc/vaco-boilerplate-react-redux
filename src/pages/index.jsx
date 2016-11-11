import 'vaco-components-library/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  App,
  Root,
  Home,
} from '../containers';
import createStore from '../redux/create';

let history = hashHistory;

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);

const store = createStore(history);
history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
  <Root
    history={history}
    routes={routes}
    store={store}
  />,
  document.getElementById('root')
);
