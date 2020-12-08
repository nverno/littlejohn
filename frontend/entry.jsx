import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// BEGIN testing
import * as util from './util/session_api_util';
import * as actions from './actions/session_actions';
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

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);

  // BEGIN testing
  window.store = store;
  window.SessionUtil = util;
  window.actions = actions;
  // END testing
});
