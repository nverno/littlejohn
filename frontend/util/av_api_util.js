// Alphavantage financial API
// https://www.alphavantage.co/documentation/
import Stocks from './stocks.js';

// XXX: move this
var stocks;
document.addEventListener('DOMContentLoaded', () => {
  stocks = new Stocks(window.avAPIKey);
});

export const fetchStock = (symbol, interval, amount) =>
  stocks.timeSeries({ symbol, interval, amount });

// const BASE_URL = 'https://www.alphavantage.co/query?';
// const API_KEY = window.avAPIKey;

// let params = {
//   function: 'TIME_SERIES_INTRADAY',
//   symbol: 'AMZN',
//   interval: '1min',
// };

// const makeQuery = params => (
//   BASE_URL +
//     Object.keys(params)
//     .map(k => `${k}=${params[k]}`)
//     .join('&') + `&apikey=${API_KEY}`
// );
