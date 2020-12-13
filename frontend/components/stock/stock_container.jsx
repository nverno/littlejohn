import { connect } from 'react-redux';
import Stock from './stock';
import { withRouter } from 'react-router-dom';
import {
  fetchStockPrices,
  fetchStockQuote,
} from '../../actions/stock_price_actions';
import { fetchCompanyInfo } from '../../actions/company_actions';

const mapStateToProps = (state, ownProps) => {
  const symbol = ownProps.match.params.symbol;

  return {
    symbol,
    company: state.entities.companies[symbol],
    quote: state.entities.quotes[symbol],
    prices: state.entities.prices[symbol],
    state,
  };
};

const mapDispatchToProps = (
  dispatch,
  {
    match: {
      params: { symbol },
    },
  }
) => ({
  fetchStockPrices: () => dispatch(fetchStockPrices(symbol)),
  fetchStockQuote: () => dispatch(fetchStockQuote(symbol)),
  fetchCompanyInfo: () => dispatch(fetchCompanyInfo(symbol)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stock));
