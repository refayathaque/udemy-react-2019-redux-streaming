import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from 'components/dumb/App';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// http://localhost:3000/?debug_session=<some_string>
// ^ Used to create debug_sessions where state data is persisted, even through page refreshes

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
