import { createStore } from 'redux';
import reducers from '../reducers';

export default function configureStore(state, middleware) {
  const store = createStore(
    reducers,
    state,
    middleware,
  );

  // -------------------
  // Hot-reloading Redux
  // -------------------


  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
}
