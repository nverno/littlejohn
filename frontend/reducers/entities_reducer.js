import { combineReducers } from 'redux';

import prices from './entities/stock_prices_reducer';
import users from './entities/users_reducer';

export default combineReducers({
  users,
  prices,
});
