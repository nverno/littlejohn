import { combineReducers } from 'redux';

import session from './errors/session_errors_reducer';
import users from './errors/user_errors_reducer';
import lists from './errors/list_errors_reducer';
import api from './errors/api_errors_reducer';
import transactions from './errors/transactions_errors_reducer';

export default combineReducers({
  session,
  users,
  lists,
  api,
  transactions,
});
