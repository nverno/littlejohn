import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StockInfo from './stock_info';
import { fetchCompanyInfo } from '../../../actions/company_actions';
import {
  companyDescription,
  companyOverview,
} from '../../../selectors/companies';

const mapStateToProps = (state, ownProps) => {
  const { symbol, company, quote } = ownProps; //ownProps.match.params.symbol;
  // const company = state.entities.companies[symbol];
  // const quote = state.entities.quotes[symbol];

  return {
    description: companyDescription(company),
    overview: companyOverview(company, quote),
    // forcedUpdate: state.entities.forcedUpdate,
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchCompanyInfo: () => dispatch(fetchCompanyInfo(match.params.symbol)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockInfo)
);
