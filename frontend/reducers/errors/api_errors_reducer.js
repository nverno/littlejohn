import {
  RECEIVE_API_ERRORS,
  RECEIVE_STOCK_PRICES,
  RECEIVE_BATCH_PRICES,
  RECEIVE_BATCH_QUOTES,
  CLEAR_API_ERRORS,
  RECEIVE_STOCK_QUOTE,
} from '../../actions/stock_price_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_API_ERRORS:
      return action.errors;
    case RECEIVE_STOCK_PRICES:
    case RECEIVE_BATCH_PRICES:
    case RECEIVE_BATCH_QUOTES:
    case CLEAR_API_ERRORS:
    case RECEIVE_STOCK_QUOTE:
      return [];
    default:
      return state;
  }
};
