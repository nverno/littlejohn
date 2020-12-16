import {
  RECEIVE_HOLDINGS_ERRORS,
  RECEIVE_HOLDINGS,
} from '../../actions/holdings_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_HOLDINGS_ERRORS:
    return action.errors;
  case RECEIVE_HOLDINGS:
    return [];
  default:
    return state;
  }
}
