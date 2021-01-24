import * as StocksAPI from '../util/stocks_api';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const SEARCH_STARTED = 'SEARCH_STARTED';
export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';
export const CLEAR_SEARCH_ERRORS = 'CLEAR_SEARCH_ERRORS';

export const clearSearchErrors = () => ({
  type: CLEAR_SEARCH_ERRORS,
});

export const receiveSearchErrors = (errors) => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
});

export const searchComplete = () => ({
  type: SEARCH_COMPLETE,
});

export const searchStarted = () => ({
  type: SEARCH_STARTED,
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results,
});

export const fetchSearchResults = (query) => (dispatch) => {
  dispatch(searchStarted());
  dispatch(clearSearchErrors());
  try {
    StocksAPI.fetchSearchResults(query).then(
      (results) => {
        dispatch(searchComplete());
        dispatch(receiveSearchResults(results));
      },
      (errors) => {
        dispatch(receiveSearchErrors([errors.message]));
        dispatch(searchComplete());
      });
  } catch(errors) {
    dispatch(receiveSearchErrors([errors.message]));
    dispatch(searchComplete());
  }
};
