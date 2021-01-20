import {
  RECEIVE_CLOSE_ALL_LISTS,
  RECEIVE_CLOSE_LIST,
  RECEIVE_OPEN_LIST,
  RECEIVE_OPEN_LISTS,
} from '../../actions/list_actions';
import { saveSettings } from '../../util/settings_api_util';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let res;

  switch (action.type) {
    case RECEIVE_CLOSE_ALL_LISTS:
      res = {};
      break;

    case RECEIVE_CLOSE_LIST:
      res = Object.assign({}, state);
      delete res[action.listId];
      break;

    case RECEIVE_OPEN_LIST:
      res = Object.assign({}, state, { [action.listId]: true });
      break;

    case RECEIVE_OPEN_LISTS:
      res = merge(action.lists, state);
      break;

    default:
      return state;
  }

  saveSettings({ ui: { lists: res } });
  return res;
}
