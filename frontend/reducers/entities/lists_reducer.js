import {
  RECEIVE_LIST, RECEIVE_USER_LISTS, REMOVE_LIST,
} from '../../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIST:
      if (!action.list.public)
        return Object.assign({}, state, { [action.list.id]: action.list });
      return state;

    case RECEIVE_USER_LISTS:
      return action.lists;

    case REMOVE_LIST:
      let ns = Object.assign({}, state);
      delete ns[action.listId];
      return ns;

    default:
      return state;
  }
}
