const fmt = (n) => n && n.toFixed(2).toLocaleString('en');

// Pull out info for About section on stocks show page
export const companyOverview = (info, quote) => {
  return (
    info &&
    quote && [
      {
        title: 'CEO',
        value: info['CEO'] && info['CEO'],
      },
      {
        title: 'Employees',
        value: info['employees'] || info['FullTimeEmployees'],
      },
      {
        title: 'Headquarters',
        value: info['address'] || info['Address'],
      },
      {
        title: 'Industry',
        value: info['industry'] || info['Industry'],
      },
      {
        title: 'Market Cap',
        value: fmt(quote['marketCap']) || info['MarketCapitalization'],
      },
      {
        title: 'Price-Earnings Ratio',
        value: quote['peRatio'] || info['PERatio'],
      },
      {
        title: 'Dividend Yield',
        value: info['DividendYield'],
      },
      {
        title: 'Profit Margin',
        value: info['ProfitMargin'],
      },
    ]
  );
};

export const companyDescription = (info) => {
  if (!info || !info['description']) return null;
  const desc = info['description'];

  if (desc.length < 235) return { first: desc };

  return {
    first: desc.slice(0, 235),
    second: desc.slice(235),
  };
};

// Pull out the extra information about a company
// Some of this comes from the daily price data, a different source
// than the regular info
export const companyOverviewExtra = (info, quote) => {
  // console.log('Quote is ', quote);
  return (
    quote &&
    info && [
      {
        title: 'High Today',
        value: fmt(quote['high']),
      },
      {
        title: 'Low Today',
        value: fmt(quote['low']),
      },
      {
        title: 'Open Price',
        value: fmt(quote['open']),
      },
      {
        title: 'Volume',
        value: fmt(quote['volume']),
      },
      {
        title: '52 Week High',
        value: fmt(quote['week52High']),
      },
      {
        title: '52 Week Low',
        value: fmt(quote['week52Low']),
      },
      {
        title: 'Avg. Total Volume',
        value: quote['avgTotalVolume'],
      },
    ]
  );
};
