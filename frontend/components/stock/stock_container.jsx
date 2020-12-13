import { connect } from 'react-redux';
import Stock from './stock';
import { fetchStockPrices } from '../../actions/stock_price_actions';

const mapStateToProps = (state, ownProps) => ({
  price: state.entities.prices[ownProps.match.params.stockId],
  state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStockPrices: () => dispatch(fetchStockPrices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
