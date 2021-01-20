export const getFollowedLists = (state) => {
  const following = state.session.currentUser.following;
  let res = [];
  following.forEach((id) => {
    if (state.entities.publicLists[id])
      res.push(state.entities.publicLists[id]);
  });
  return res;
};

export const getOpenListSymbols = (state) => {
  const listIds = Object.keys(state.ui.lists);
  if (!state.entities.lists.length) return [];
  return listIds.reduce(
    (acc, listId) => acc.concat(state.entities.lists[listId].assets),
    []
  );
};

// Return lists in proper ordering
export const getLists = (lists) => {
  if (!lists) return [];
  let res = Object.values(lists);
  res.sort((a, b) => a.index - b.index);
  return res;
};
