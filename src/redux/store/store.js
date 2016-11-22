// --- Dependencies
import { applyMiddleware, compose } from 'redux';
import { hashHistory as history } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// --- Local files
import configureStore from './configureStore';

const historyMiddleware = routerMiddleware(history);
const loggerMiddleware = createLogger({
  collapsed: true,
});

const middlewares = [
  historyMiddleware,
  thunk,
];

// chrome Redux extension: https://github.com/zalmoxisus/redux-devtools-extension
const chromeDevTool = __DEVELOPMENT__ && window.devToolsExtension ?
  window.devToolsExtension() : f => f;

if (__DEVELOPMENT__) {
  middlewares.push(loggerMiddleware);
}

const initialState = {
  greeting: {},
};

const middleware = compose(applyMiddleware(...middlewares), chromeDevTool);

const store = configureStore(initialState, middleware);

export default store;
