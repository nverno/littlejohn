import { RECEIVE_HOLDINGS } from '../../actions/holdings_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOLDINGS:
      return action.holdings;
    default:
      return state;
  }
};
