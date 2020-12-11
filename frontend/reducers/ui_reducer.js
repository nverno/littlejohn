import { combineReducers } from 'redux';
import navbar from './navbar_reducer';

// XXX: See bench-bnb filter_actions / filters_reducer
export default combineReducers({
  navbar,
});
