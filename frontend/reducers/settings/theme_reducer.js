import {
  RECEIVE_THEME,
  RESET_THEME,
} from '../../actions/settings_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';

const _defaultState = '';

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.theme || _defaultState;

    case RECEIVE_THEME:
      return action.theme;

    case LOGOUT_CURRENT_USER:
    case RESET_THEME:
      return _defaultState;

    default:
      return state;
  }
}
