import { fetchHoldings } from './holdings_actions';
import { fetchPublicLists, fetchUserLists } from './list_actions';

export const fetchPortfolioUserData = () => (dispatch) => {
  dispatch(fetchHoldings());
  dispatch(fetchPublicLists());
  dispatch(fetchUserLists());
};
