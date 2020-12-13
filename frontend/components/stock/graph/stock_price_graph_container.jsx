import { connect } from 'react-redux';
import StockPriceGraph from './stock_price_graph';
import { fetchStockPrices } from '../../../actions/stock_price_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const { symbol } = ownProps.match.params;

  return ({
    prices: state.entities.prices[symbol],
    symbol,
    state,
  });
};

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchStockPrices: (interval) => (
    dispatch(fetchStockPrices(match.params.symbol, interval))
  ),
});

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(StockPriceGraph));
