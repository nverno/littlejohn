import * as UserAPI from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';
export const RECEIVE_USER_HOLDINGS = 'RECEIVE_USER_HOLDINGS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS,
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const receiveUserHoldings = (holdings) => ({
  type: RECEIVE_USER_HOLDINGS,
  holdings
});

export const updateBalance = (userId, amount) => dispatch => (
  UserAPI.updateBalance(userId, amount)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveUserErrors(err)))
);

export const fetchHoldings = (userId) => dispatch => (
  UserAPI.fetchHoldings(userId)
    .then(holdings => dispatch(receiveUserHoldings(holdings)),
          err => dispatch(receiveUserErrors(err)))
);
