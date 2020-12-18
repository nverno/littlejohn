import { iexAPI } from '../util/stocks_api';
import {
  receiveApiErrors,
  receiveBatchPrices,
  receiveBatchQuotes,
} from './stock_price_actions';
import { receiveBatchCompany } from './company_actions';

export const fetchStockShowData = ({ symbol, quotes, prices, companies }) => (
  dispatch
) => {
  // console.log('Fetch: ', quotes, prices);
  let types = [],
    params = {};

  if (!quotes[symbol]) {
    types.push('quote');
    // params['chartInterval'] = 1;
  }

  if (!(prices[symbol] && prices[symbol]['1D'])) types.push('intraday-prices');

  if (!companies[symbol]) {
    types.push('company');
  }

  // console.log('Fetching: ', types);

  if (types.length > 0) {
    iexAPI.fetchBatchStocks([symbol], types, params).then(
      (data) => {
        dispatch(receiveBatchQuotes(data));
        dispatch(receiveBatchPrices(data, 'intraday-prices'));
        dispatch(receiveBatchCompany(data));
      },
      (errors) => dispatch(receiveApiErrors(errors))
    );
  }
};
