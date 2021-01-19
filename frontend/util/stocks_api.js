import AVStocksCache from './av_stocks_cache';
import IexAPI from './iex_stocks';

export var avAPI;
export var iexAPI;

const intervalTable = {
  '1D': 'daily',
  '1W': 'weekly',
  '1M': 'monthly',
  // XXX: add 3M, 1Y, 5Y
};
const normalizeInterval = (interval) => intervalTable[interval] || interval;

export const initializeStocksAPI = (ttl, keys) => {
  avAPI = new AVStocksCache(keys['av'], ttl);
  iexAPI = new IexAPI(keys['iex']);
};

// export const fetchStockPrices = (symbol, interval, amount = 100) => {
//   interval = normalizeInterval(interval);
//   return avAPI.timeSeries({ symbol, interval, amount });
// };

export const fetchStockQuote = (symbol) => {
  return avAPI.quote(symbol);
};

export const fetchCompanyInfo = (symbol) => {
  return avAPI.stocksAPI.companyInfo(symbol);
};

export const fetchSearchResults = (query) => {
  return avAPI.stocksAPI.search(query);
};

export const fetchQueryResults = (symbol, ...params) =>
  avAPI.stocksAPI.query(symbol, ...params);
