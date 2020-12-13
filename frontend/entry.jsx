import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// BEGIN testing
import * as util from './util/session_api_util';
import * as actions from './actions/session_actions';
import * as StockAPI from './util/stock_api_util';
// END testing

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;

  // bootstrap currentUser
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser,
      },
    };
    delete window.currentUser;
  }

  // Initializes stocks API with key and time-to-live for cached results
  StockAPI.initializeStocksAPI(10 * 60 * 1000);

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);

  // BEGIN testing
  window.store = store;
  window.SessionUtil = util;
  window.actions = actions;
  window.sapi = StockAPI;
  // END testing
});
