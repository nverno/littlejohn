import {
  CLOSE_EDIT_LIST_MODAL,
  OPEN_EDIT_LIST_MODAL,
  OPEN_SELECT_LIST_MODAL,
  CLOSE_SELECT_LIST_MODAL,
} from '../../actions/list_actions';

const _defaultState = {
  editList: false,
  selectList: false,
};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CLOSE_EDIT_LIST_MODAL:
      return Object.assign({}, state, { editList: false });

    case OPEN_EDIT_LIST_MODAL:
      return Object.assign({}, state, { editList: action.listId });

    case OPEN_SELECT_LIST_MODAL:
      return Object.assign({}, state, { selectList: action.asset });

    case CLOSE_SELECT_LIST_MODAL:
      return Object.assign({}, state, { selectList: false });

    default:
      return state;
  }
};
