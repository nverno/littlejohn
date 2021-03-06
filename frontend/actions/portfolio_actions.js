import * as Holdings from './holdings_actions';
import { iexAPI } from '../util/stocks_api';
import {
  receiveBatchQuotes,
  receiveBatchPrices,
  receiveApiErrors,
} from './stock_price_actions';
import * as UserAPI from '../util/user_api_util';
import * as Lists from './list_actions';

export const fetchPortfolioStockData = (holdings) => (dispatch) => {
  iexAPI
    .fetchBatchStocks(Object.keys(holdings), ['quote']).then((data) => {
      dispatch(receiveBatchQuotes(data));
  });
};

export const fetchPortfolioUserData = () => (dispatch) => {
  dispatch(Holdings.fetchHoldings());
  dispatch(Lists.fetchPublicLists());
  dispatch(Lists.fetchUserLists());
};

const symbolsToFetch = (symbols, quotes) =>
      [...new Set(symbols.filter((sym) => !quotes[sym]))];

// only get quotes for holdings if haven't already
export const maybeFetchSidebarData = ({ symbols, quotes }) => (dispatch) => {
  // console.log('sidebar fetch: ', symbols, quotes);
  const syms = symbolsToFetch(symbols, quotes);
  if (syms.length > 0) {
    iexAPI
      .fetchBatchStocks(syms, ['quote', 'intraday-prices'], {
        chartInterval: 5,
        // chartSimplify: true,
      })
      .then(
        (data) => {
          dispatch(receiveBatchPrices(data, 'intraday-prices'));
          dispatch(receiveBatchQuotes(data));
        },
        (errors) => dispatch(receiveApiErrors([errors.message]))
      );
  }
};

export const fetchSidebarHoldingsData = ({ quotes, prices }) => (dispatch) => {
  UserAPI.fetchHoldings().then((holdings) => {
    dispatch(Holdings.receiveHoldings(holdings));
    const symbols = Object.keys(holdings);
    dispatch(maybeFetchSidebarData({ symbols, quotes }));
  });
};

export const fetchSidebarListsData = () => (dispatch) => {
  dispatch(Lists.fetchPublicLists());
  dispatch(Lists.fetchUserLists());
};
