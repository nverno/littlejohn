import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    // Clear errors
    case LOGOUT_CURRENT_USER:
    case RECEIVE_CURRENT_USER:
      return [];

    default:
      return state;
  }
};
