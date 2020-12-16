import { combineReducers } from 'redux';

import navbar from './ui/navbar_reducer';
import searchResults from './ui/search_reducer';
import header from './ui/header_reducer';

// XXX: See bench-bnb filter_actions / filters_reducer
export default combineReducers({
  navbar,
  searchResults,
  header,
});
