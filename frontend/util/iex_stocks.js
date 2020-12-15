// iexCloud financial API
// quotes, news, timeseries

var fetch = window.fetch;

// const INTERVALS = {
//   '1D': 'intraday-prices',
//   ''
// };

// Batch requests:
// https://iexcloud.io/docs/api/#batch-requests
export default class IexAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://cloud.iexapis.com/stable";
    this.sandboxURL = "https://sandbox.iexapis.com";
  }

  createUrl(endpoint, params={}) {
    params.token = this.apiKey;
    const encoded = Object.keys(params)
          .map(key => `${key}=${params[key]}`)
          .join('&');
    return `${this.baseURL}${endpoint}?${encoded}`;
  }

  async apiRequest(endpoint, params) {
    return fetch(this.createUrl(endpoint, params))
      .then(res => res.json());
  }

  // Crypto
  async cryptoQuote(symbol) {
    return this.apiRequest(`/crypto/${symbol}/quote`);
  }

  // Stocks
  async companyInfo(symbol) {
    return this.apiRequest(`/stock/${symbol}/company`);
  }

  async news(symbol, lastN=10) {
    return this.apiRequest(`/stock/${symbol}/news/last/${lastN}`);
  }

  async price(symbol) {
    return this.apiRequest(`/stock/${symbol}/price`);
  }

  async keyStats(symbol) {
    return this.apiRequest(`/stock/${symbol}/stats`);
  }

  async logo(symbol) {
    return this.apiRequest(`/stock/${symbol}/logo`);
  }

  async previousDay(symbol) {
    return this.apiRequest(`/stock/${symbol}/previous`);
  }

  async priceTarget(symbol) {
    return this.apiRequest(`/stock/${symbol}/price-target`);
  }

  async quote(symbol) {
    return this.apiRequest(`/stock/${symbol}/quote`);
  }

  async recommendationTrends(symbol) {
    return this.apiRequest(`/stock/${symbol}/recommendation-trends`);
  }

  // Graph data
  // async prices(symbol, interval) {
  // }

  // Markets
  async sectorPerformance() {
    return this.apiRequest("/stock/market/sector-performance");
  }
}
