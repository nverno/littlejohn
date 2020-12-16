// User params/settings
export const updateBalance = (userId, amount) =>
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: { amount },
  });

// Holdings
export const fetchHoldings = () =>
  $.ajax({
    method: 'GET',
    url: `/api/holdings`,
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

export const postBuy = (order) => (
  $.ajax({
    method: 'POST',
    url: '/api/buy',
    data: { ...order }
  })
);

export const postSell = (order) => (
  $.ajax({
    method: 'POST',
    url: '/api/sell',
    data: { ...order }
  })
);
