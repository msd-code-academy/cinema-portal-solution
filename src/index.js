import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import DevTools from './containters/DevTools';
import './index.css';
import App from './containters/App';

const history = createHistory();
const routingMiddleware = routerMiddleware(history);

const configureStore = preloadedState => {
  const store = createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer
    }),
    preloadedState,
    compose(
      applyMiddleware(routingMiddleware, thunk),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
};
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
