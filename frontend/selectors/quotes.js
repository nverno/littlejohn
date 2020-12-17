export const positiveChange = (quote) => quote && quote.changePercent > 0;

export const quotePercent = (quote) =>
  quote
    ? (100 * quote.changePercent).toFixed(2).toLocaleString('en') + '%'
    : '—';

export const quotePrice = (quote) =>
  quote ? '$' + quote.latestPrice.toFixed(2).toLocaleString('en') : '—';
