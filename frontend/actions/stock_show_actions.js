import { iexAPI } from '../util/stocks_api';
import {
  receiveApiErrors,
  receiveBatchPrices,
  receiveBatchQuotes,
  receiveStockPrices,
} from './stock_price_actions';
import { receiveBatchCompany } from './company_actions';

export const FORCE_COMPONENT_RENDER = 'FORCE_COMPONENT_RENDER';

export const forceComponentRender = () => ({
  type: FORCE_COMPONENT_RENDER,
});

export const fetchStockShowData = ({
  symbol,
  quotes,
  prices,
  companies,
  descriptions,
}) => (dispatch) => {
  // Get description from AlphaVantage
  // if (!descriptions[symbol])
  //   dispatch(fetchCompanyInfo(symbol));

  // console.log('Fetch: ', quotes, prices);
  let types = [],
    params = {};

  if (!quotes[symbol]) {
    types.push('quote');
    // params['chartSimplify'] = true;
  }

  // if (!(prices[symbol] && prices[symbol]['1D'])) types.push('intraday-prices');

  if (!companies[symbol]) {
    types.push('company');
  }

  // console.log('Fetching: ', types);
  if (types.length > 0) {
    iexAPI.fetchBatchStocks([symbol], types, params).then(
      (data) => {
        if (types.includes('quote')) dispatch(receiveBatchQuotes(data));
        // dispatch(receiveBatchPrices(data, 'intraday-prices'));
        if (types.includes('company')) dispatch(receiveBatchCompany(data));
      },
      (errors) => dispatch(receiveApiErrors([errors.message]))
    );
  } else {
    // If components have cached all the data, they can subscribe to
    // this in order to re-render when they normally would have been triggered
    // by a state change.
    // dispatch(forceComponentRender());
  }
};

export const fetchStockPrices = ({ symbol, interval, prices }) => (
  dispatch
) => {
  if (prices[symbol] && prices[symbol][interval]) {
    // dispatch(forceComponentRender());
  } else {
    iexAPI.fetchPrices(symbol, interval).then(
      (values) => dispatch(receiveStockPrices(symbol, interval, values)),
      (errors) => dispatch(receiveApiErrors([errors.message]))
    );
  }
};
