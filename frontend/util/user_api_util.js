// User params/settings
export const updateBalance = (userId, amount) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: { amount },
  });

// Holdings
export const fetchHoldings = (userId) =>
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/holdings`,
  });

// Transactions
export const fetchTransactions = () =>
  $.ajax({
    method: 'GET',
    url: `/api/transactions`,
  });

export const postTransaction = (transaction) =>
  $.ajax({
    method: 'POST',
    url: `/api/transactions`,
    data: { transaction },
  });

export const fetchTransaction = (transactionId) =>
  $.ajax({
    method: 'GET',
    url: `/api/transactions/${transactionId}`,
  });
