import * as UserAPI from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';
export const OPEN_DEPOSIT_MODAL = 'OPEN_DEPOSIT_MODAL';
export const CLOSE_DEPOSIT_MODAL = 'CLOSE_DEPOSIT_MODAL';

export const closeDepositModal = () => ({
  type: CLOSE_DEPOSIT_MODAL,
});

export const openDepositModal = () => ({
  type: OPEN_DEPOSIT_MODAL,
});

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS,
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const updateBalance = (userId, amount) => (dispatch) =>
  UserAPI.updateBalance(userId, amount).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveUserErrors(err))
  );

export const refreshCurrentUser = () => dispatch => (
  $.ajax({
    method: 'GET',
    url: `/api/users`,
  }).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  )
);
