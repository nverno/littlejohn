import { connect } from 'react-redux';
import PortfolioGraph from './portfolio_graph';
import { fetchPortfolioStockData } from '../../../actions/portfolio_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    prices: state.entities.prices,
    holdings: state.entites.holdings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPortfolioStockData: () => dispatch(fetchPortfolioStockData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioGraph);
