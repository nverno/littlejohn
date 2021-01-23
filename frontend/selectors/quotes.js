import { fmtClass, fmtPrice, fmtPercent } from './util';

export const positiveChange = (quote) => quote && quote.changePercent > 0;

export const quotePercent = (quote, field = 'changePercent') => (
  fmtPercent(quote && quote[field])
);

export const quotePrice = (quote) => {
  return fmtPrice(quote && quote.latestPrice);
};

export const quoteClass = (quote) => {
  return fmtClass(quote && quote.changePercent);
};

export const prettyQuotePrice = (quote, field = 'latestPrice') => {
  return fmtPrice(quote && quote[field]);
};
