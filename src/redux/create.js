import { applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { routerMiddleware,
//  syncHistoryWithStore
} from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Middleware variable is a store enhancer and the chrome extension is also an enhancer,
// so compose both in a single function:


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
    // middlewares
    enhancers
  );

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer').default); // eslint-disable-line
    });
  }

  return store;
}
