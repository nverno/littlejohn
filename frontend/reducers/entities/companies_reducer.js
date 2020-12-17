import {
  RECEIVE_COMPANY_INFO,
  RECEIVE_BATCH_COMPANY,
} from '../../actions/company_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      return Object.assign({}, state, { [action.symbol]: action.values });

    case RECEIVE_BATCH_COMPANY:
      let ns = Object.assign({}, state);
      for (const [sym, val] of Object.entries(action.data)) {
        ns[sym] = val.company;
      }
      return ns;

    default:
      return state;
  }
};
