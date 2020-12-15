export const fetchLists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/lists'
  })
);

export const fetchList = id => (
  $.ajax({
    method: 'GET',
    url: `/api/lists/${id}`
  })
);

export const fetchWatchlists = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/${userId}/watchlists`
  })
);

export const createWatchlist = (userId, list) => (
  $.ajax({
    method: 'POST',
    url: `/api/${userId}/watchlists`,
    data: { list }
  })
);

export const updateWatchlist = (userId, watchlistId, list) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/${userId}/watchlists/${watchlistId}`,
    data: { list }
  })
);

export const deleteWatchlist = (userId, watchlistId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/${userId}/watchlists/${watchlistId}`
  })
);
