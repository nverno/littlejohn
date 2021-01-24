import { connect } from 'react-redux';
import Stock from './stock';
import { withRouter } from 'react-router-dom';

import { fetchStockShowData } from '../../actions/stock_show_actions';
import { clearTransactionErrors } from '../../actions/transactions_actions';

const mapStateToProps = (state, ownProps) => {
  const symbol = ownProps.match.params.symbol;
  return {
    symbol,
    company: state.entities.companies[symbol],
    quote: state.entities.quotes[symbol],
    prices: state.entities.prices[symbol],
    entities: state.entities,
    description: state.entities.descriptions[symbol],
    holding: state.entities.holdings[symbol],
    apiErrors: state.errors.api,
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
  fetchStockShowData: (stateData) => dispatch(fetchStockShowData(stateData)),
  clearTransactionErrors: () => dispatch(clearTransactionErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stock));
