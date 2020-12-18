import {
  RECEIVE_STOCK_PRICES,
  RECEIVE_BATCH_PRICES,
} from '../../actions/stock_price_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let intervalKey = action.interval;
  if (intervalKey === 'intraday-prices') intervalKey = '1d';

  switch (action.type) {
    case RECEIVE_STOCK_PRICES:
      let res = Object.assign({}, state);
      if (!res[action.symbol]) res[action.symbol] = {};
      res[action.symbol][action.interval] = action.values;
      return res;

    case RECEIVE_BATCH_PRICES:
      if (!action.interval) return state;

      let ns = Object.assign({}, state);
      for (const [sym, val] of Object.entries(action.data)) {
        if (!ns[sym]) ns[sym] = {};

        ns[sym][intervalKey] = val[action.interval];
      }
      return ns;

    default:
      return state;
  }
};
