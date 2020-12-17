import { fetchHoldings } from './holdings_actions';
import { fetchPublicLists, fetchUserLists } from './list_actions';
import { iexAPI } from '../util/stocks_api';
import { receiveBatchQuotes } from './stock_price_actions';

export const fetchPortfolioUserData = () => (dispatch) => {
  dispatch(fetchHoldings());
  dispatch(fetchPublicLists());
  dispatch(fetchUserLists());
};

export const fetchPortfolioStockData = (holdings) => dispatch => {
  iexAPI.fetchBatchStocks(Object.keys(holdings), ['quote'])
    .then(data => {
      dispatch(receiveBatchQuotes(data));
      console.log(data);
    });
};
