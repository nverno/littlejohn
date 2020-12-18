import { FORCE_COMPONENT_RENDER } from '../../actions/stock_show_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FORCE_COMPONENT_RENDER:
      return Object.assign({}, state, { cachedOp: true });

    default:
      return state;
  }
};
