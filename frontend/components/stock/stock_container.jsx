import { connect } from 'react-redux';
import Stock from './stock';
import { fetchStockPrices } from '../../actions/stock_price_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const symbol = ownProps.match.params.symbol;
  return ({
    symbol,
    price: state.entities.prices[symbol],
    state,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchStockPrices: () => dispatch(fetchStockPrices()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stock));
