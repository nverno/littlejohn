import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Root from './components/root';
import configureStore from './store/store';
import './styles/theme.module.scss';
import './styles/font.module.scss';
import './styles/button.module.scss';
import './styles/main.scss';

// BEGIN testing
import * as util from './util/session_api_util';
import * as StocksAPI from './util/stocks_api';
import * as actions from './actions/user_actions';
import * as lists from './actions/list_actions';
import * as holdings from './actions/holdings_actions';
import * as transactions from './actions/transactions_actions';
import * as port from './actions/portfolio_actions';
import * as prices from './actions/stock_price_actions';
import * as show from './actions/stock_show_actions';
import * as settings from './actions/settings_actions';
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
      settings: {
        theme: window.currentUser.theme || '',
      }
    };
    delete window.currentUser;
  }

  // Initializes iex/alphavantage APIs with key and time-to-live
  // for cached results
  StocksAPI.initializeStocksAPI(10 * 60 * 1000);

  // Setup modal
  Modal.setAppElement(document.getElementById('root'));

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);

  // BEGIN testing
  window.store = store;
  window.SessionUtil = util;
  window.actions = actions;
  window.sapi = StocksAPI;
  window.lists = lists;
  window.holdings = holdings;
  window.transactions = transactions;
  window.port = port;
  window.prices = prices;
  window.show = show;
  window.settings = settings;
  // END testing
});
