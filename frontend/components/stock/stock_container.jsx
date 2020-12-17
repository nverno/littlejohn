import { connect } from 'react-redux';
import Stock from './stock';
import { withRouter } from 'react-router-dom';

import { fetchStockShowData } from '../../actions/stock_show_actions';

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
  fetchCompanyInfo: () => dispatch(fetchCompanyInfo(symbol)),
  fetchStockShowData: (stateData) => dispatch(fetchStockShowData(stateData)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Stock));
