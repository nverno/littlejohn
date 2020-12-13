import { RECEIVE_STOCK_QUOTE } from '../../actions/stock_price_actions';

export default (state = {}, { type, symbol, quote }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_STOCK_QUOTE:
      return Object.assign({}, state, { [symbol]: quote });

    default:
      return state;
  }
};
