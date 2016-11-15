// --- Dependencies
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// --- Local files
import reducer from './modules/reducer';

export default function (history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middlewares = applyMiddleware(
    createLogger(),
    reduxRouterMiddleware,
    thunk
  );

  const enhancers = compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(
    reducer,
    enhancers
  );

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      const nextRootReducer = require('./modules/reducer').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
