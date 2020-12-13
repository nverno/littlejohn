// Pull out info for About section on stocks show page
export const companyOverview = (info) => {
  return (
    info && [
      {
        title: 'Name',
        value: info['Name'] && info['Name'].replace(/,?\s*Inc.?$/i, ''),
      },
      {
        title: 'Employees',
        value: info['FullTimeEmployees'],
      },
      {
        title: 'Headquarters',
        // TODO: trim address
        value: info['Address'],
      },
      {
        title: 'Industry',
        value: info['Industry'],
      },
      {
        title: 'Market Cap',
        // TODO: format market cap
        value: info['MarketCapitalization'],
      },
      {
        title: 'Price-Earnings Ratio',
        value: info['PERatio'],
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
  if (!info || !info['Description']) return null;
  const desc = info['Description'];

  if (desc.length < 235) return { first: desc };

  return {
    first: desc.slice(0, 235),
    second: desc.slice(235),
  };
};

// Pull out the extra information about a company
// Some of this comes from the daily price data, a different source
// than the regular info
export const companyOverviewExtra = (info, quotes) => {
  // console.log('Info is ', info);
  return [
    {
      title: 'High Today',
      value: quotes && quotes['high'],
    },
    {
      title: 'Low Today',
      value: quotes && quotes['low'],
    },
    {
      title: 'Open Price',
      value: quotes && quotes['open'],
    },
    {
      title: 'Volume',
      value: quotes && quotes['volume'],
    },
    {
      title: '52 Week High',
      value: info && info['52WeekHigh'],
    },
    {
      title: '52 Week Low',
      value: info && info['52WeekLow'],
    },
    {
      title: '50 Day Moving Avg.',
      value: info && info['50DayMovingAverage'],
    },
  ];
};
