export const getPrices = (prices, field = 'average') => {
  if (!prices) return null;
  return prices.map((el) => el[field]);
};

export const max = (prices) => Math.max.apply(prices);
export const min = (prices) => Math.min.apply(prices);
export const range = (prices) => [min(prices), max(prices)];

export const isPositive = (prices) => {
  return prices[prices.length - 1].average - prices[0].average > 0;
};
