//
// API for alphavantage financial data
//
// Modified from
// https://github.com/wagenaartje/stocks.js
//
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
var fetch = window.fetch;

function Stocks(apiKeys) {
  this.apiKeys = apiKeys;
  this.iKey = Math.floor(Math.random() * this.apiKeys.length);
  this.nextKey = () => {
    const res = this.apiKeys[this.iKey];
    this.iKey = (this.iKey + 1) % this.apiKeys.length;
    return res;
  };
}

const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});

// Cleanup search/quote results
// remove preceding list index and replace spaces with '_'
const cleanQuote = (quote) =>
  mapKeys(quote, (_, k) => k.slice(4).replace(/ /g, '_'));

const cleanSearch = (results) =>
  results.map((res) => mapKeys(res, (_, k) => k.slice(4).replace(/ /g, '_')));

Stocks.prototype = {
  /** Constants */
  DEFAULT_URL: 'https://www.alphavantage.co/query?',
  API_KEY_URL: 'https://www.alphavantage.co/support/#api-key',

  INTERVALS: [
    '1min',
    '5min',
    '15min',
    '30min',
    '60min',
    'daily',
    'weekly',
    'monthly',
  ],
  PERFORMANCES: [
    'real-time',
    '1day',
    '5day',
    '1month',
    '3month',
    'year-to-date',
    '1year',
    '3year',
    '5year',
    '10year',
  ],

  INDICATORS: [
    'SMA',
    'EMA',
    'WMA',
    'DEMA',
    'TEMA',
    'TRIMA',
    'KAMA',
    'MAMA',
    'VWAP',
    'T3',
    'MACD',
    'MACDEXT',
    'STOCH',
    'STOCHF',
    'RSI',
    'STOCHRSI',
    'WILLR',
    'ADX',
    'ADXR',
    'APO',
    'PPO',
    'MOM',
    'BOP',
    'CCI',
    'CMO',
    'ROC',
    'ROCR',
    'AROON',
    'AROONOSC',
    'MFI',
    'TRIX',
    'ULTOSC',
    'DX',
    'MINUS_DI',
    'PLUS_DI',
    'MINUS_DM',
    'PLUS_DM',
    'BBANDS',
    'MIDPOINT',
    'MIDPRICE',
    'SAR',
    'TRANGE',
    'ATR',
    'NATR',
    'AD',
    'ADOSC',
    'OBV',
    'HT_TRENDLINE',
    'HT_SINE',
    'HT_TRENDMODE',
    'HT_DCPERIOD',
    'HT_DCPHASE',
    'HT_PHASOR',
  ],

  INDICATORS_ST: [
    'SMA',
    'EMA',
    'WMA',
    'DEMA',
    'TEMA',
    'TRIMA',
    'KAMA',
    'MAMA',
    'T3',
    'MACD',
    'MACDEXT',
    'RSI',
    'STOCHRSI',
    'APO',
    'PPO',
    'MOM',
    'CMO',
    'ROC',
    'ROCR',
    'TRIX',
    'BBANDS',
    'MIDPOINT',
    'HT_TRENDLINE',
    'HT_SINE',
    'HT_TRENDMODE',
    'HT_DCPERIOD',
    'HT_DCPHASE',
    'HT_PHASOR',
  ],

  /** Private functions */
  _createUrl: function (params) {
    params.apikey = this.nextKey();

    var encoded = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&');

    // console.log('URL: ', encoded);
    return this.DEFAULT_URL + encoded;
  },

  _doRequest: async function (params) {
    if (typeof this.apiKeys === 'undefined') {
      this._throw(0, 'error');
    }

    var self = this;
    const res = await fetch(this._createUrl(params));
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    const data = await res.json();
    
    if (typeof data['Error Message'] !== 'undefined') {
      self._throw(9, 'error');
    } else if (typeof data['Note'] !== 'undefined') {
      throw new Error(`API limit exceeded: ${data['Note']}`);
    }

    return data;
  },

  _throw: function (code, type) {
    if (type === 'error') {
      throw new Error(`${code}: ${this.MESSAGES[code]}`);
    } else if (type === 'warning') {
      console.warn(`${code}: ${this.MESSAGES[code]}`);
    }
  },

  _checkOptions: function (options, type) {
    if (typeof options === 'undefined') {
      this._throw(1, 'error');
    } else if (typeof options.symbol === 'undefined') {
      this._throw(2, 'error');
    } else if (
      typeof options.interval === 'undefined' ||
      !this.INTERVALS.includes(options.interval)
    ) {
      this._throw(3, 'error');
    } else if (
      typeof options.start !== 'undefined' &&
      typeof options.amount !== 'undefined'
    ) {
      this._throw(4, 'error');
    }

    if (
      typeof options.amount === 'undefined' &&
      typeof options.start === 'undefined'
    ) {
      this._throw(8, 'warning');
    }

    if (
      typeof options.start === 'object' &&
      typeof options.end === 'undefined'
    ) {
      this._throw(10, 'warning');
      options.end = Date.now();
    }

    if (type === 'technical') {
      if (typeof options.indicator === 'undefined') {
        this._throw(5, 'error');
      } else if (typeof options.time_period === 'undefined') {
        this._throw(6, 'error');
      } else if (!this.INDICATORS.includes(options.indicator)) {
        this._throw(12, 'error');
      } else if (
        typeof options.series_type === 'undefined' &&
        this.INDICATORS_ST.includes(options.indicator)
      ) {
        this._throw(11, 'error');
      }
    }
  },

  _convertData: function (data, amount) {
    // Strip meta data
    var key = Object.keys(data).find(
      (key) =>
        key.indexOf('Time Series') !== -1 || key.indexOf('Technical') !== -1
    );
    data = data[key];

    var newData = [];

    // Process all elements
    for (key in data) {
      if (typeof amount !== 'undefined' && newData.length === amount) break;

      // Smoothen up the keys and values in each sample
      let newSample = {};
      for (var sampleKey in data[key]) {
        let newSampleKey = sampleKey.replace(/.+. /, '');
        newSample[newSampleKey] = Number(data[key][sampleKey]);
      }

      // Convert date to local time (dates from AV should be EDT)
      newSample['date'] = new Date(
        Date.parse(key) + (240 - new Date().getTimezoneOffset()) * 60000
      );

      // Insert in new data
      newData.push(newSample);
    }

    return newData;
  },

  _getBetween: function (data, start, end) {
    // Can be optimized by calculating index of start and end dates in list
    return data.filter((sample) => start <= sample.date && sample.date <= end);
  },

  /** Public functions */
  timeSeries: async function (options = {}) {
    this._checkOptions(options, 'timeseries');

    if (this.INTERVALS.slice(0, 5).includes(options.interval)) {
      var interval = options.interval;
      options.interval = 'intraday';
    }

    var params = {
      function: `TIME_SERIES_${options.interval}`,
      symbol: options.symbol,
      outputsize: 'full',
    };

    if (options.interval === 'intraday') {
      params.interval = interval;
    }

    if (
      this.INTERVALS.indexOf(options.interval) <= 5 &&
      options.amount <= 100
    ) {
      params.outputsize = 'compact';
    }

    // Get result
    var result = await this._doRequest(params);
    var converted = this._convertData(result, options.amount);

    if (typeof options.start !== 'undefined') {
      converted = this._getBetween(converted, options.start, options.end);
    }

    return converted;
  },

  technicalIndicator: async function (options = {}) {
    this._checkOptions(options, 'technical');

    var params = {
      function: options.indicator,
      symbol: options.symbol,
      interval: options.interval,
      time_period: options.time_period,
      series_type: options.series_type,
    };

    // Get result
    var result = await this._doRequest(params);
    var converted = this._convertData(result, options.amount);

    if (typeof options.start !== 'undefined') {
      converted = this._getBetween(converted, options.start, options.end);
    }

    return converted;
  },

  sectorPerformance: async function (options = {}) {
    if (
      typeof options.timespan === 'undefined' ||
      !this.PERFORMANCES.includes(options.timespan)
    ) {
      this._throw(7, 'error');
    }

    var params = {
      function: 'SECTOR',
    };

    var result = await this._doRequest(params);

    var found = Object.keys(result).find((key) => {
      let noSpace = key.replace(/ /g, '').toLowerCase();
      return noSpace.includes(options.timespan);
    });

    result = result[found];
    for (var j in result) {
      result[j] = parseFloat(result[j]);
    }

    return result;
  },

  companyInfo: async function (company) {
    const params = {
      function: 'OVERVIEW',
      symbol: company,
    };

    return this._doRequest(params);
  },

  search: async function (query) {
    const params = {
      function: 'SYMBOL_SEARCH',
      keywords: query,
    };

    let res = await this._doRequest(params);
    return res['bestMatches'] ? res['bestMatches'] : [];
  },

  // Generic API entry point
  // By default return daily quote for a given symbol
  query: async function (symbol, func = 'GLOBAL_QUOTE', ...rest) {
    return this._doRequest({
      function: func,
      symbol,
      ...rest,
    });
  },

  quote: async function (symbol) {
    let res = await this._doRequest({
      function: 'GLOBAL_QUOTE',
      symbol,
    });

    return cleanQuote(res['Global Quote']);
  },
};

Stocks.prototype.MESSAGES = {
  0: `You must first claim your API Key at ${Stocks.prototype.API_KEY_URL}`,
  1: 'No options specified!',
  2: 'No `symbol` option specified!',
  3:
    `No (correct) 'interval' option specified, please set to any of the ` +
    `following: ${Stocks.prototype.INTERVALS.join(', ')}`,
  4: `Only 'start'-'end' OR 'amount' can be specified!`,
  5: `No 'indicator' option specified!`,
  6: `No 'time_period' option specified!`,
  7:
    `No (correct) 'interval' option specified, please set to any of the ` +
    `following: ${Stocks.prototype.PERFORMANCES.join(', ')}`,
  8: `No 'amount' option specified, returning maximum amount of datapoints`,
  9:
    'An error occured during the API request. Please create an issue at ' +
    'https://github.com/wagenaartje/stocks/issues with your code',
  10:
    `'start' specified, but 'end' not specified. Using today's date as ` +
    `end date!`,
  11: `No 'series_type' option specified`,
  12: `The indicator specified does not exist. Please check the Alpha Vantage
       list of indicators https://www.alphavantage.co/documentation/#technical-indicators`,
};

/** Export */
export default Stocks;
// if (typeof window === 'undefined') {
//   module.exports = Stocks; // Node.js
// } else {
//   window['Stocks'] = Stocks; // Browser
// }
