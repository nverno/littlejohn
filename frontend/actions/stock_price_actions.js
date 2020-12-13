import * as StockAPI from '../util/stock_api_util';

export const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES';

export const receiveStockPrices = (symbol, interval, values) => ({
  type: RECEIVE_STOCK_PRICES,
  symbol,
  interval,
  values,
});

// FIXME: handle errors
export const fetchStockPrices = (symbol, interval, amount = 100) => dispatch => (
  StockAPI.fetchStockPrices(symbol, interval, amount)
    .then(values => dispatch(receiveStockPrices(symbol, interval, values)))
);
