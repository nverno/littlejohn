export const RECEIVE_FUNDS = 'RECEIVE_FUNDS';

export const receiveFunds = (amount) => ({
  type: RECEIVE_FUNDS,
  amount
});

export const updateBalance = (user_id, amount) => dispatch => {
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user_id}`,
    data: { amount }
  }).then(res => dispatch(receiveFunds(res)));
};
