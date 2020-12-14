import * as StockAPI from '../util/stock_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results,
});

export const fetchSearchResults = (query) => (dispatch) =>
  StockAPI.fetchSearchResults(query).then((results) =>
    dispatch(receiveSearchResults(results))
  );