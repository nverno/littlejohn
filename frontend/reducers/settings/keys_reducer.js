import {
  RECEIVE_API_KEYS,
  RECEIVE_API_KEY,
} from '../../actions/settings_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_API_KEYS:
      return action.keys;

    case RECEIVE_API_KEY:
      return Object.assign({}, state, { [action.key]: action.value });

    default:
      return state;
  }
}
