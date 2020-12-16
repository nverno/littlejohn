import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { fetchPortfolioUserData } from '../../actions/portfolio_actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchPortfolioUserData: () => dispatch(fetchPortfolioUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
