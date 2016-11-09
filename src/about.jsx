import 'vaco-components-library/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, hashHistory } from 'react-router';
import {
  App,
  Home,
  About,
  Root,
} from './containers';
import createStore from './redux/create';

const history = hashHistory;

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/ab" component={About} />
  </Route>
);

const store = createStore(history);
// const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
  <Root
    history={history}
    routes={routes}
    store={store}
  />,
  document.getElementById('root')
);
