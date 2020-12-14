import { connect } from 'react-redux';
import Search from './search';

import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state, _ownProps) => ({
  searchResults: state.ui.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
