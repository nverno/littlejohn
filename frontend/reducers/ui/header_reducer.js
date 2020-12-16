import {
  HEADER_CLOSE_ALL,
  HEADER_DROPDOWN_OPEN,
  HEADER_DROPDOWN_CLOSE,
} from '../../actions/header_actions';

const _defaultHeader = {
  open: null,
};

export default (state = _defaultHeader, { type, itemId }) => {
  Object.freeze(state);

  switch (type) {
    case HEADER_CLOSE_ALL:
      return _defaultHeader;

    case HEADER_DROPDOWN_OPEN:
      if (state.open) return state;
      return Object.assign({}, state, { open: itemId });

    case HEADER_DROPDOWN_CLOSE:
      if (!state.open) return state;
      return Object.assign({}, state, { open: null });

    default:
      return state;
  }
};
