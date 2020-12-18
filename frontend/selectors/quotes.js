const fmt = (n) => n.toFixed(2).toLocaleString('en');

export const positiveChange = (quote) => quote && quote.changePercent > 0;

export const quotePercent = (quote, field = 'changePercent') =>
  quote ? fmt(100 * quote[field]) + '%' : '—';

export const quotePrice = (quote) => {
  if (!quote) return '—';
  const price = quote.latestPrice;
  return price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price);
};

export const quoteClass = (quote) =>
  positiveChange(quote) ? 'lj-positive' : 'lj-negative';

export const prettyQuotePrice = (quote, field = 'latestPrice') => {
  if (!quote) return '—';
  const price = quote[field];
  return price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price);
};
