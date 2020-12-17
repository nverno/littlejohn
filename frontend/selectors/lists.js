export const getFollowedLists = (state) => {
  const following = state.session.currentUser.following;
  let res = [];
  following.forEach((id) => {
    if (state.entities.publicLists[id])
      res.push(state.entities.publicLists[id]);
  });
  return res;
};
