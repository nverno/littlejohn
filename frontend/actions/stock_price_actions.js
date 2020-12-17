import * as StocksAPI from '../util/stocks_api';

export const RECEIVE_STOCK_PRICES = 'RECEIVE_STOCK_PRICES';
export const RECEIVE_STOCK_QUOTE = 'RECEIVE_STOCK_QUOTE';
export const RECEIVE_BATCH_QUOTES = 'RECEIVE_BATCH_QUOTES';

export const receiveBatchQuotes = (data) => ({
  type: RECEIVE_BATCH_QUOTES,
  data
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

// FIXME: handle errors
export const fetchStockPrices = (symbol, interval, amount = 100) => (
  dispatch
) =>
  StocksAPI.fetchStockPrices(symbol, interval, amount).then((values) =>
    dispatch(receiveStockPrices(symbol, interval, values))
  );

export const fetchStockQuote = (symbol) => (dispatch) => {
  return StocksAPI.fetchStockQuote(symbol).then((quote) =>
    dispatch(receiveStockQuote(symbol, quote))
  );
};

// TODO:
// export const fetchBatchListData = (state, listId) => dispatch => {
//   StocksAPI.iexAPI.fetchBatchStocks(list.assets, ['quote'])
//     .then(data => {
//       dispatch(receiveBatchQuotes(data));
//     });
// };
