export const getPrices = (prices, field = 'average') => {
  if (!prices) return null;
  return prices.map((el) => el[field]);
};
