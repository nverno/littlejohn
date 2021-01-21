import { connect } from 'react-redux';
import Search from './search';

import {
  fetchSearchResults,
  clearSearchResults,
} from '../../actions/search_actions';

const mapStateToProps = (state, _ownProps) => ({
  loading: state.ui.loading.search,
  theme: state.settings.theme,
  searchResults: state.ui.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
  clearSearchResults: () => dispatch(clearSearchResults()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
