import {
  RECEIVE_PUBLIC_LISTS,
  RECEIVE_LIST,
  RECEIVE_USER_LISTS,
  REMOVE_LIST,
  RECEIVE_LIST_ERRORS,
  CLEAR_LIST_ERRORS,
} from '../../actions/list_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors;

    case CLEAR_LIST_ERRORS:
    case RECEIVE_PUBLIC_LISTS:
    case RECEIVE_LIST:
    case RECEIVE_USER_LISTS:
    case REMOVE_LIST:
      return [];

    default:
      return state;
  }
};
