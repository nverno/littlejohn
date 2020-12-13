// Pull out info for About section on stocks show page
export const companyOverview = (info) => {
  return (
    info && [
      {
        title: 'Name',
        value: info['Name'],
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
  if (!info) return null;
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
export const companyOverviewExtra = (info, prices) => {
  // console.log('Info is ', info);
  return (
    info && [
      {
        title: 'High Today',
      },
      {
        title: 'Low Today',
      },
      {
        title: 'Open Price',
      },
      {
        title: 'Volume',
      },
      {
        title: '52 Week High',
        value: info['52WeekHigh'],
      },
      {
        title: '52 Week Low',
        value: info['52WeekLow'],
      },
      {
        title: '50 Day Moving Avg.',
        value: info['50DayMovingAverage'],
      },
    ]
  );
};
