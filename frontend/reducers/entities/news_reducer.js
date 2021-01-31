import {
  RECEIVE_BATCH_NEWS,
  RECEIVE_NEWS,
} from '../../actions/news_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NEWS:
      return Object.assign({}, state, { [action.symbol]: action.news });

    case RECEIVE_BATCH_NEWS:
      let ns = Object.assign({}, state);
      for (const [key, val] of Object.entries(action.data)) {
        ns[key] = val['news'];
      }
      return ns;

    default:
      return state;
  }
}
