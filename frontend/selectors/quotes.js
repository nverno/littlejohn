export const fmt = (n) => n.toFixed(2).toLocaleString('en');

export const fmtPrice = (price) => (
  (!price && '—') ||
    price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price)
);

export const fmtPercent = price => (
  price ? fmt(100 * price) + '%' : '—'
);

export const fmtClass = (price) => price && price > 0 ? 'lj-positive' : 'lj-negative';
export const positiveChange = (quote) => quote && quote.changePercent > 0;

export const quotePercent = (quote, field = 'changePercent') => (
  fmtPercent(quote && quote[field])
);

export const quotePrice = (quote) => {
  return fmtPrice(quote && quote.latestPrice);
};

export const quoteClass = (quote) =>
  positiveChange(quote) ? 'lj-positive' : 'lj-negative';

export const prettyQuotePrice = (quote, field = 'latestPrice') => {
  return fmtPrice(quote && quote[field]);
};
