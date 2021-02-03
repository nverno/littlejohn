import { connect } from 'react-redux';
import Portfolio from './portfolio';
import {
  fetchPortfolioUserData,
  fetchPortfolioData,
} from '../../actions/portfolio_actions';
import { getOpenListSymbols } from '../../selectors/lists';

const mapStateToProps = (state, ownProps) => {
  return {
    holdings: state.entities.holdings,
    // prices: state.entities.prices,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // fetchPortfolioUserData: () => dispatch(fetchPortfolioUserData()),
  // fetchPortfolioData: (stateData) => dispatch(fetchPortfolioData(stateData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
