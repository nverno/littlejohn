import { connect } from 'react-redux';
import Portfolio from './portfolio';
// import { actions } from '../../actions/';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
  // actions: () => dispatch(actions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
