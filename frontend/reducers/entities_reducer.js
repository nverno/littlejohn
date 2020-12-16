import { combineReducers } from 'redux';

import prices from './entities/stock_prices_reducer';
import users from './entities/users_reducer';
import companies from './entities/companies_reducer';
import quotes from './entities/stock_quotes_reducer';
import publicLists from './entities/public_lists_reducer';
import lists from './entities/lists_reducer';
import holdings from './entities/holdings_reducer';

export default combineReducers({
  users,
  prices,
  companies,
  quotes,
  publicLists,
  lists,
  holdings,
});
