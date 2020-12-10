import { connect } from 'react-redux';
import Splash from './splash';
import { demoLogin } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
  demoLogin: () => dispatch(demoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
