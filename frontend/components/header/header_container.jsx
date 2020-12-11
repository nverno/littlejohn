import { connect } from 'react-redux';
import Header from './header';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
    return <Redirect to="/login" />;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
