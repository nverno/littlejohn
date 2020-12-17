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
  return listIds.reduce(
    (acc, listId) => acc.concat(state.entities.lists[listId].assets),
    []
  );
};
