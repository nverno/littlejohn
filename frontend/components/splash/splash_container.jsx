import { connect } from 'react-redux';
import Splash from './splash';
import { demoLogin } from '../../actions/session_actions';

const mapStateToProps = (state, _ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = (dispatch) => ({
  demoLogin: () => dispatch(demoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
