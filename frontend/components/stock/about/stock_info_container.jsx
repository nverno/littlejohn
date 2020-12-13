import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StockInfo from './stock_info';
import { fetchStockInfo } from '../../../actions/stock_price_actions';

const mapStateToProps = (state, { match }) => ({
  symbol: match.params.symbol,
  state,
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchStockInfo: () => dispatch(fetchStockInfo(match.params.symbol)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockInfo));
