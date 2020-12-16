import { combineReducers } from 'redux';

import session from './errors/session_errors_reducer';
import users from './errors/user_errors_reducer';

export default combineReducers({
  session,
  users,
});
