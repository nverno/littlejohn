import {
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
} from '../../actions/transactions_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRANSACTION:
      let ns = Object.assign([], state);
      ns.push(action.transaction);
      return ns;

    case RECEIVE_TRANSACTIONS:
      return action.transactions;

    default:
      return state;
  }
};
