import {
  NAVBAR_DROPDOWN_CLOSE,
  NAVBAR_DROPDOWN_OPEN,
  NAVBAR_CLOSE_ALL,
} from '../../actions/navbar_actions';

const _defaultNavbar = {
  open: null,
};

export default (state = _defaultNavbar, action) => {
  Object.freeze(state);
  switch (action.type) {
    case NAVBAR_CLOSE_ALL:
      return _defaultNavbar;

    case NAVBAR_DROPDOWN_CLOSE:
      if (!state.open) return state;
      return Object.assign({}, state, { open: null });

    case NAVBAR_DROPDOWN_OPEN:
      if (state.open) return state;
      return Object.assign({}, state, { open: action.itemId });

    default:
      return state;
  }
}
