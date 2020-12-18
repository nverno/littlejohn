export const getPrices = (prices, field = 'average') => {
  if (!prices) return null;
  return prices.map((el) => el[field]);
};

export const max = (prices) => Math.max.apply(prices);
export const min = (prices) => Math.min.apply(prices);
export const range = (prices) => [min(prices), max(prices)];

export const isPositive = (prices, field = 'average') => {
  return prices[prices.length - 1][field] - prices[0][field] > 0;
};

export const changesOverTime = (prices, key = 'close') => {
  const priceChange = prices[prices.length][key] - prices[prices.length][0];
  return {
    priceChange,
    percentChange: priceChange / prices[0][key],
  };
};
