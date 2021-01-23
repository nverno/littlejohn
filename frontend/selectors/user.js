export const fmt = (num) => {
  return num.toFixed(2).toLocaleString('en');
};

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

// const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

export const getUsername = ({ session: { currentUser } }) =>
  `${capitalize(currentUser.firstName)} ${capitalize(currentUser.lastName)}`;

export const getBuyingPower = ({ session: { currentUser } }) => {
  return fmt(currentUser.balance);
};

// export const getPortfolioValue = ({ session: { currentUser } }) => {
//   return '--';
// };

export const getPortfolioValue = (holdings, quotes) => {
  if (holdings.length === 0 || quotes.length === 0) return '--';
  let amt = 0.0;
  for (const [symbol, val] of Object.entries(holdings)) {
    amt += quotes[symbol].latestPrice * val.amount;
  }
  return fmt(amt);
};

export const getMarketValue = (holding, quote) => {
  return fmt(holding.amount * quote.latestPrice);
};

// Compute portfolio value of over time from holdings and times series data
// XXX: this just simplifies it and assumes whatever is held now, was the
// same over time. This is good enough for now, until the transactions data is
// used
export const computePortfolioValue = (interval, holdings, prices) => {
  if (!interval) return null;
  const held = Object.keys(holdings);
  if (held.length === 0) return null;

  if (holdings.length === 0 || !holdings[held[0]]) {
    console.log('no holdings');
    return null;
  }

  if (prices.length === 0 || !prices[held[0]]) {
    console.log('no prices');
    return null;
  }

  const minLen = prices[held[0]][interval].length; //Math.min(...held.map((sym) => prices[sym][interval].length)) ||

  const key = interval === '1d' ? 'average' : 'close';
  let data = [];

  for (let i = 0; i < minLen; i++) {
    let val = 0;

    held.forEach((sym) => {
      val += holdings[sym].amount * prices[sym][interval][i][key];
    });

    data.push({
      label: prices[held[0]][interval][i]['label'],
      value: val,
    });
  }

  return data;
};

// const zip = (...arrays) => {
//   const maxLength = Math.max(...arrays.map(x => x.length));
//   return Array.from({ length: maxLength }).map((_, i) => {
//     return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
//   });
// };
