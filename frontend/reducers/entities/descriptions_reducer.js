import { RECEIVE_COMPANY_DESCRIPTION } from '../../actions/company_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMPANY_DESCRIPTION:
      return Object.assign({}, state, { [action.symbol]: action.data });

    default:
      return state;
  }
};
