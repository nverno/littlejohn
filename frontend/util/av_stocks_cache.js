import Stocks from './av_stocks';

// Cached values that expire after time_to_live (ttl)
class Cache {
  constructor(ttl) {
    this.ttl = ttl;
    this.cache = {};
  }

  serialize(key) {
    return typeof key !== 'string' ? JSON.stringify(key) : key;
  }

  // Return cached value if it exists and hasn't expired
  get({ symbol, interval, amount, ...rest }) {
    try {
      const res = this.cache[symbol][interval];
      // console.log(this.cache);
      // console.log(`get({ ${symbol}, ${interval} }) = ${res}`);
      if (Date.now() - res.timestamp > this.ttl) return null;
      return res.value;
    } catch (_) {
      return null;
    }
  }

  put({ symbol, interval, amount, ...rest }, value) {
    let obj = this.cache;

    if (!obj[symbol]) obj[symbol] = {};
    obj = obj[symbol];

    obj[interval] = {
      timestamp: Date.now(),
      value,
    };

    return obj[interval];
  }
}

// Caching wrapper around Stocks API
// API fetches are only made if the previous value has expired (after `timeout`)
export default class StocksCache {
  constructor(apiKeys, ttl) {
    this.apiKeys = apiKeys;
    this.cache = new Cache(ttl);
    this.stocksAPI = new Stocks(apiKeys);
  }

  normalizeParams(options) {
    if (this.stocksAPI.INTERVALS.slice(0, 5).includes(options.interval))
      return Object.assign({}, options, { interval: 'intraday' });

    return options;
  }

  timeSeries(options) {
    const self = this;

    return new Promise((resolve, _reject) => {
      let res = self.cache.get(this.normalizeParams(options));

      if (res) {
        resolve(res);
      } else {
        self.stocksAPI.timeSeries(options).then((result) => {
          self.cache.put(this.normalizeParams(options), result);
          resolve(result);
        });
      }
    });
  }

  quote(symbol) {
    const self = this;
    const options = { symbol, interval: 'quote' };

    return new Promise((resolve, _reject) => {
      const res = self.cache.get(options);
      if (res) {
        resolve(res);
      } else {
        self.stocksAPI.quote(symbol).then((result) => {
          self.cache.put(options, result);
          resolve(result);
        });
      }
    });
  }
}
