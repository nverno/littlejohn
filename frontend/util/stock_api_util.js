import StocksCache from './stocks_cache';

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

var __stocksAPI;

export const initializeStocksAPI = (ttl) => {
  __stocksAPI = new StocksCache(window.avAPIKey, ttl);
};

export const fetchStockPrices = (symbol, interval, amount = 100) =>
  __stocksAPI.timeSeries({ symbol, interval, amount });
