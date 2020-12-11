import { connect } from 'react-redux';
import NavbarItems from './navbar_items';
// import { actions } from '../../actions/';

const mapStateToProps = (state, ownProps) => ({
  items: ownProps.items,
});

const mapDispatchToProps = (dispatch) => ({
  // actions: () => dispatch(actions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarItems);
