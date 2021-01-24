import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderPage from '../header/header_page';
import { clearApiErrors } from '../../actions/stock_price_actions';
import navStyles from '../navbar/main/main-navbar.module.scss';
import fonts from '../../styles/font.module.scss';

const mapStateToProps = (state, ownProps) => ({
  symbol: ownProps.match.params.symbol,
});

const mapDispatchToProps = dispatch => ({
  clearApiErrors: () => dispatch(clearApiErrors()),
});

const NotAvailable = ({ symbol, clearApiErrors }) => {
  React.useEffect(() => {
    clearApiErrors();
  }, []);

  return (
    <HeaderPage>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
        <div className={fonts.type11}>
          No data available for <span className={fonts.type12}>{symbol}</span>
        </div>

        <br />

        <Link to="/" className={navStyles.signupButton}>
          Go Home
        </Link>
        
      </div>
    </HeaderPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NotAvailable);
