import {
  SEARCH_STARTED,
  SEARCH_COMPLETE,
} from '../../actions/search_actions';

const _defaultState = {
  search: false,
};

export default (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SEARCH_STARTED:
      return Object.assign({}, state, { search: true });

    case SEARCH_COMPLETE:
      return Object.assign({}, state, { search: false });

    default:
      return state;
  }
}
