import {
  RECEIVE_TRANSACTION_ERRORS,
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
  CLEAR_TRANSACTION_ERRORS,
} from '../../actions/transactions_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION_ERRORS:
      return action.errors;

    case RECEIVE_TRANSACTION:
    case RECEIVE_TRANSACTIONS:
    case CLEAR_TRANSACTION_ERRORS:
      return [];

    default:
      return state;
  }
};
