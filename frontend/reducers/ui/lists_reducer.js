import {
  RECEIVE_CLOSE_ALL_LISTS,
  RECEIVE_CLOSE_LIST,
  RECEIVE_OPEN_LIST,
} from '../../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CLOSE_ALL_LISTS:
      return {};

    case RECEIVE_CLOSE_LIST:
      let ns = Object.assign({}, state);
      delete ns[action.listId];
      return ns;

    case RECEIVE_OPEN_LIST:
      return Object.assign({}, state, { [action.listId]: true });

    default:
      return state;
  }
}
