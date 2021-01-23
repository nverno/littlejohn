import { fmt, fmtPrice, fmtPercent } from './util';

export const marketValue = (holding, quote) => {
  return fmtPrice(holding.amount * quote.latestPrice);
};

export const cost = (holding) => {
  return fmtPrice(holding.avgPrice, holding.amount);
};

export const avgCost = (holding) => {
  return fmtPrice(holding.avgPrice);
};

export const shares = (holding) => fmt(holding.amount);

// return daily [$change, %change]
export const returnToday = (holding, quote) => {
  const { open, latestPrice } = quote;
  const { amount } = holding;
  const initial = amount * open,
        final = amount * latestPrice,
        change = final - initial,
        pctChange = change / initial;
  return [fmtPrice(change), fmtPercent(pctChange)];
};

// return total [$change, %change]
export const returnTotal = (holding, quote) => {
  const { latestPrice } = quote;
  const { amount, avgPrice } = holding;
  const initial = amount * avgPrice,
        final = amount * latestPrice,
        change = final - initial,
        pctChange = change / initial;
  return [fmtPrice(change), fmtPercent(pctChange)];
};
