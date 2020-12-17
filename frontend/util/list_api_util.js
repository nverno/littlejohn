export const fetchPublicLists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/lists',
  });
};

export const createPublicList = (list) =>
  $.ajax({
    method: 'POST',
    url: `/api/lists`,
    data: { list },
  });

export const fetchList = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/lists/${id}`,
  });
};

export const updateList = (list) => {
  console.log('Updating: ', list);
  return $.ajax({
    method: 'PATCH',
    url: `/api/lists/${list.id}`,
    data: { list },
  });
};

export const deleteList = (listId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/lists/${listId}`,
  });
};

export const createUserList = (userId, list) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/lists`,
    data: { list },
  });
};

export const fetchUserLists = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/lists?user=true`,
  });
};

export const followList = (userId, listId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/lists/${listId}/follow`,
  });
};

export const unfollowList = (userId, listId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/lists/${listId}/follow`,
  });
};
