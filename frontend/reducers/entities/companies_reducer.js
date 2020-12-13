import { RECEIVE_COMPANY_INFO } from '../../actions/company_actions';

export default (state = {}, { type, symbol, values }) => {
  Object.freeze(state);

  switch (type) {
    case RECEIVE_COMPANY_INFO:
      return Object.assign({}, state, { [symbol]: values });

    default:
      return state;
  }
};
