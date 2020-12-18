import { connect } from 'react-redux';
import StockPriceGraph from './stock_price_graph';
import { fetchStockPrices } from '../../../actions/stock_show_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const { symbol } = ownProps.match.params;

  return {
    prices: state.entities.prices[symbol],
    allPrices: state.entities.prices,
    quote: state.entities.quotes[symbol],
    symbol,
    state,
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchStockPrices: (pars) =>
    dispatch(
      fetchStockPrices({
        symbol: match.params.symbol,
        ...pars,
      })
    ),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockPriceGraph)
);
