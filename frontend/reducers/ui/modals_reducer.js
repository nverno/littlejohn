import {
  CLOSE_EDIT_LIST_MODAL,
  OPEN_EDIT_LIST_MODAL,
} from '../../actions/list_actions';

const _defaultState = {
  editList: false,
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLOSE_EDIT_LIST_MODAL:
      return Object.assign({}, state, { editList: false });

    case OPEN_EDIT_LIST_MODAL:
      return Object.assign({}, state, { editList: action.listId });

    default:
      return state;
  }
};
