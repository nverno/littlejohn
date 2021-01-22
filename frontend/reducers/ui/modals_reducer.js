import {
  OPEN_LIST_MODAL,
  CLOSE_LIST_MODALS,
} from '../../actions/list_actions';

const _defaultState = {
  lists: {
    edit: false,
    select: false,
    order: false,
    rename: false,
  }
};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CLOSE_LIST_MODALS:
      return Object.assign({}, state, { lists: _defaultState['lists'] });

    case OPEN_LIST_MODAL:
      return Object.assign({}, state, { lists: { [action.name]: action.value } });

    default:
      return state;
  }
};
