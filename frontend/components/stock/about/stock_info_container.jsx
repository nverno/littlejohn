import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StockInfo from './stock_info';
import { fetchCompanyInfo } from '../../../actions/company_actions';
import {
  companyDescription,
  companyOverview,
} from '../../../selectors/companies';

const mapStateToProps = (state, ownProps) => {
  const { company } = ownProps;

  return {
    description: companyDescription(company),
    overview: companyOverview(company),
    state,
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchCompanyInfo: () => dispatch(fetchCompanyInfo(match.params.symbol)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StockInfo)
);
