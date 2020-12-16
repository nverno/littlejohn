import * as UserAPI from '../util/user_api_util';

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';
export const CLEAR_TRANSACTION_ERRORS = 'CLEAR_TRANSACTION_ERRORS';

export const clearTransactionErrors = () => ({
  type: CLEAR_TRANSACTION_ERRORS,
});

export const receiveTransactionErrors = (errors) => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors,
});

export const receiveTransaction = (transaction) => ({
  type: RECEIVE_TRANSACTION,
  transaction,
});

export const receiveTransactions = (transactions) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
});

export const fetchTransactions = () => (dispatch) => {
  return UserAPI.fetchTransactions().then(
    (transactions) => dispatch(receiveTransactions(transactions)),
    (errors) => dispatch(receiveTransactionErrors(errors))
  );
};

export const fetchTransaction = (transactionId) => (dispatch) => {
  return UserAPI.fetchTransaction(transactionId).then(
    (transaction) => dispatch(receiveTransaction(transaction)),
    (errors) => dispatch(receiveTransactionErrors(errors))
  );
};

export const createTransaction = (transaction) => (dispatch) => {
  return UserAPI.postTransaction(transaction).then(
    (transaction) => dispatch(receiveTransaction(transaction)),
    (errors) => dispatch(receiveTransactionErrors(errors))
  );
};
