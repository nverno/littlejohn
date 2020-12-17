import * as Holdings from './holdings_actions';
// import { fetchPublicLists, fetchUserLists } from './list_actions';
import { iexAPI } from '../util/stocks_api';
import { receiveBatchQuotes } from './stock_price_actions';
import * as UserAPI from '../util/user_api_util';
import * as Lists from './list_actions';
import * as ListsAPI from '../util/list_api_util';

export const fetchPortfolioStockData = (holdings) => (dispatch) => {
  iexAPI.fetchBatchStocks(Object.keys(holdings), ['quote']).then((data) => {
    dispatch(receiveBatchQuotes(data));
    console.log(data);
  });
};

export const fetchPortfolioUserData = () => (dispatch) => {
  dispatch(Holdings.fetchHoldings());
  dispatch(Lists.fetchPublicLists());
  dispatch(Lists.fetchUserLists());
};

const symbolsToFetch = (symbols, quotes) =>
  symbols.filter((sym) => !quotes[sym]);

// only get quotes for holdings if haven't already
export const maybeFetchSidebarData = ({ symbols, quotes }) => (dispatch) => {
  const syms = symbolsToFetch(symbols, quotes);
  if (syms.length > 0) {
    console.log('Fetching symbols: ', syms);
    iexAPI
      .fetchBatchStocks(syms, ['quote'])
      .then((data) => dispatch(receiveBatchQuotes(data)));
  }
};

export const fetchSidebarHoldingsData = ({ quotes }) => (dispatch) => {
  UserAPI.fetchHoldings().then((holdings) => {
    dispatch(Holdings.receiveHoldings(holdings));
    dispatch(
      maybeFetchSidebarData({
        symbols: Object.keys(holdings),
        quotes,
      })
    );
  });
};

export const fetchSidebarListsData = () => (dispatch) => {
  dispatch(Lists.fetchPublicLists());
  dispatch(Lists.fetchUserLists());
};
