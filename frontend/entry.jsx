import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// BEGIN testing
import * as util from './util/session_api_util';
import * as StocksAPI from './util/stocks_api';
import * as actions from './actions/user_actions';
import * as lists from './actions/list_actions';
import * as holdings from './actions/holdings_actions';
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

  // Initializes iex/alphavantage APIs with key and time-to-live
  // for cached results
  StocksAPI.initializeStocksAPI(10 * 60 * 1000);

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);

  // BEGIN testing
  window.store = store;
  window.SessionUtil = util;
  window.actions = actions;
  window.sapi = StocksAPI;
  window.lists = lists;
  window.holdings = holdings;
  // END testing
});
