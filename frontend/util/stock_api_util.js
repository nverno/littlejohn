import AVStocksCache from './av_stocks_cache';

// Alphavantage financial API
// https://www.alphavantage.co/documentation/
// eg.
//
// const BASE_URL = 'https://www.alphavantage.co/query?';
// const API_KEY = window.avAPIKey;
//
// let params = {
//   function: 'TIME_SERIES_INTRADAY',
//   symbol: 'AMZN',
//   interval: '1min',
// };
//
// const makeQuery = params => (
//   BASE_URL +
//     Object.keys(params)
//     .map(k => `${k}=${params[k]}`)
//     .join('&') + `&apikey=${API_KEY}`
// );

export var __avStocksAPI;

const intervalTable = {
  '1D': 'daily',
  '1W': 'weekly',
  '1M': 'monthly',
  // XXX: add 3M, 1Y, 5Y
};
const normalizeInterval = (interval) => intervalTable[interval] || interval;

export const initializeAVStocksAPI = (ttl) => {
  __avStocksAPI = new AVStocksCache(window.avAPIKey, ttl);
};

export const fetchStockPrices = (symbol, interval, amount = 100) => {
  interval = normalizeInterval(interval);
  return __avStocksAPI.timeSeries({ symbol, interval, amount });
};

export const fetchStockQuote = (symbol) => {
  return __avStocksAPI.quote(symbol);
};

export const fetchCompanyInfo = (symbol) => {
  return __avStocksAPI.stocksAPI.companyInfo(symbol);
};

export const fetchSearchResults = (query) => {
  return __avStocksAPI.stocksAPI.search(query);
};

export const fetchQueryResults = (symbol, ...params) =>
  __avStocksAPI.stocksAPI.query(symbol, ...params);
