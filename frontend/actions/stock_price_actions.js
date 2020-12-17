import * as StocksAPI from '../util/stocks_api';

export const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES';
export const RECEIVE_STOCK_QUOTE = 'RECEIVE_STOCK_QUOTE';
export const RECEIVE_BATCH_QUOTES = 'RECEIVE_BATCH_QUOTES';
export const RECEIVE_BATCH_PRICES = 'RECEIVE_BATCH_PRICES';
export const RECEIVE_API_ERRORS = 'RECEIVE_API_ERRORS';
export const CLEAR_API_ERRORS = 'CLEAR_API_ERRORS';

export const clearApiErrors = () => ({
  type: CLEAR_API_ERRORS,
});

export const receiveApiErrors = (errors) => ({
  type: RECEIVE_API_ERRORS,
  errors,
});

export const receiveBatchPrices = (data, interval) => ({
  type: RECEIVE_BATCH_PRICES,
  data,
  interval,
});

export const receiveBatchQuotes = (data) => ({
  type: RECEIVE_BATCH_QUOTES,
  data,
});

export const receiveStockQuote = (symbol, quote) => ({
  type: RECEIVE_STOCK_QUOTE,
  symbol,
  quote,
});

export const receiveStockPrices = (symbol, interval, values) => ({
  type: RECEIVE_STOCK_PRICES,
  symbol,
  interval,
  values,
});

export const fetchStockPrices = ({ symbol, interval, prices }) => (
  dispatch
) => {
  if (prices[symbol] && prices[symbol][interval]) return null;

  switch (interval) {
    case '1D':
      return StocksAPI.iexAPI.fetchPrices1D(symbol).then(
        (values) => dispatch(receiveStockPrices(symbol, interval, values)),
        (errors) => dispatch(receiveApiErrors(errors))
      );

    default:
      return null;
  }
};

export const fetchStockQuote = (symbol) => (dispatch) => {
  return StocksAPI.fetchStockQuote(symbol).then((quote) =>
    dispatch(receiveStockQuote(symbol, quote))
  );
};

export const fetchBatchPrices = ({ symbols, interval, prices }) => (
  dispatch
) => {
  const syms = prices
    ? symbols.filter((sym) => !(prices[sym] && prices[sym][interval]))
    : symbols;
  if (syms.length === 0) return null;

  console.log('Fetching prices for: ', syms);
  switch (interval) {
    case '1D':
      return StocksAPI.iexAPI.fetchBatchDailyPrices(syms).then(
        (data) => dispatch(receiveBatchPrices(data, 'intraday-prices')),
        (errors) => dispatch(receiveApiErrors(errors))
      );
    default:
      return null;
  }
};
