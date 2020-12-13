import { combineReducers } from 'redux';

import prices from './entities/stock_prices_reducer';
import users from './entities/users_reducer';
import companies from './entities/companies_reducer';

export default combineReducers({
  users,
  prices,
  companies,
});
