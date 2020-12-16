import {
  RECEIVE_PUBLIC_LISTS,
  RECEIVE_LIST,
} from '../../actions/list_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIST:
      if (action.list.public) {
        return Object.assign({}, state, { [action.list.id]: action.list });
      }
      return state;

    case RECEIVE_PUBLIC_LISTS:
      return action.lists;

    default:
      return state;
  }
}
