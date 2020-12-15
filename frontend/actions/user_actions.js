import * as UserAPI from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';
export const RECEIVE_USER_HOLDINGS = 'RECEIVE_USER_HOLDINGS';

export const receiveUserHoldings = (holdings) => ({
  type: RECEIVE_USER_HOLDINGS,
  holdings
});

export const updateBalance = (userId, amount) => dispatch => {
  UserAPI.updateBalance(userId, amount)
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const fetchHoldings = (userId) => (
  UserAPI.fetchHoldings(userId)
    .then(holdings => receiveUserHoldings(holdings))
);
