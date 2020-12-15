// User params/settings
export const updateBalance = (userId, amount) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: { amount }
  })
);

// Holdings
export const fetchHoldings = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/${userId}/holdings`
  })
);

// Transactions
