import {
  RECEIVE_STOCK_PRICES,
} from '../../actions/stock_price_actions';

export default (state = {}, { type, symbol, interval, values }) => {
  Object.freeze(state);
  switch (type) {

    case RECEIVE_STOCK_PRICES:
      let res = Object.assign({}, state);
      if (!res[symbol]) res[symbol] = {};
      res[symbol][interval] = values;
      return res;

    default:
      return state;
  }
}
