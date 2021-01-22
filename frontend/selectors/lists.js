export const getFollowedLists = (state) => {
  const following = state.session.currentUser.following;
  let res = [];
  following.forEach((id) => {
    if (state.entities.publicLists[id])
      res.push(state.entities.publicLists[id]);
  });
  return res;
};

export const getOpenListSymbols = ({ openLists, lists }) => {
  const listIds = Object.keys(openLists);
  return listIds.reduce(
    (acc, listId) => acc.concat(lists[listId].assets),
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

export const listContains = (list, symbol) => {
  return list.assets.some(item => item === symbol);
};

export const isWatched = (asset, lists) => {
  for (const [key, list] of Object.entries(lists)) {
    if (list.assets.includes(asset))
      return true;
  }
  return false;
};
