import { connect } from 'react-redux';
import Portfolio from './portfolio';
import {
  fetchPortfolioUserData,
  fetchPortfolioData,
} from '../../actions/portfolio_actions';
import { getOpenListSymbols } from '../../selectors/lists';

const mapStateToProps = (state, ownProps) => {
  const { holdings, lists, quotes } = state.entities;
  const symbols = Object.keys(holdings).concat(getOpenListSymbols(state));

  return {
    holdings,
    quotes,
    symbols,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPortfolioUserData: () => dispatch(fetchPortfolioUserData()),
  fetchPortfolioData: (stateData) => dispatch(fetchPortfolioData(stateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
