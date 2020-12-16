export const fetchPublicLists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/lists'
  })
);

export const createPublicList = (list) => (
  $.ajax({
    method: 'POST',
    url: `/api/lists`,
    data: { list }
  })
);

export const fetchList = id => (
  $.ajax({
    method: 'GET',
    url: `/api/lists/${id}`
  })
);

export const updateList = (list) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list.id}`,
    data: { list }
  })
);

export const deleteList = (listId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/lists/${listId}`
  })
);

export const createUserList = (userId, list) => (
  $.ajax({
    method: 'POST',
    url: `/api/${userId}/lists`,
    data: { list }
  })
);

export const fetchUserLists = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/${userId}/lists`
  })
);

export const followList = (userId, listId) => (
  $.ajax({
    method: 'POST',
    url: `/api/${userId}/lists/${listId}/follow`,
  })
);
