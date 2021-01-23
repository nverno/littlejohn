import {
  OPEN_LIST_MODAL,
  CLOSE_LIST_MODALS,
} from '../../actions/list_actions';
import { OPEN_DEPOSIT_MODAL, CLOSE_DEPOSIT_MODAL } from '../../actions/user_actions';

const _defaultState = {
  lists: {
    edit: false,
    select: false,
    order: false,
    rename: false,
  },
  deposit: false,
};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CLOSE_LIST_MODALS:
      return Object.assign({}, state, { lists: _defaultState['lists'] });

    case OPEN_LIST_MODAL:
      return Object.assign({}, state, { lists: { [action.name]: action.value } });

    case OPEN_DEPOSIT_MODAL:
      return Object.assign({}, state, { deposit: true });

    case CLOSE_DEPOSIT_MODAL:
      return Object.assign({}, state, { deposit: false });

    default:
      return state;
  }
};
