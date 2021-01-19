import { combineReducers } from 'redux';

import theme from './settings/theme_reducer';
import keys from './settings/keys_reducer';

export default combineReducers({
  theme,
  keys,
});
