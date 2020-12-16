import * as UserAPI from '../util/user_api_util';
export const RECEIVE_HOLDINGS = 'RECEIVE_HOLDINGS';
export const RECEIVE_HOLDINGS_ERRORS = 'RECEIVE_HOLDINGS_ERRORS';

export const receiveHoldingsErrors = (errors) => ({
  type: RECEIVE_HOLDINGS_ERRORS,
  errors,
});

export const receiveHoldings = (holdings) => ({
  type: RECEIVE_HOLDINGS,
  holdings,
});

export const fetchHoldings = () => (dispatch) =>
  UserAPI.fetchHoldings().then(
    (holdings) => dispatch(receiveHoldings(holdings)),
    (err) => dispatch(receiveHoldingsErrors(err))
  );
