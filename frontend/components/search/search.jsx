import React, { Component } from 'react';

import SearchIcon from './search_icon';
import SearchMenu from './search_menu';
import styles from './search.module.scss';
import { setOverlay } from '../../selectors/themes';

// TODO: clicking elsewhere should also close search menu
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      menuOpen: false,
    };
    // timeout started after a query changed, used to debounce
    this.timeout = null;
  }

  componentDidMount() {
    this.props.clearSearchResults();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  updateQuery(e) {
    this.setState({ query: e.currentTarget.value });

    // Debounce search results to avoid making too many fetches back-to-back
    // This should start a timeout when 'query' changes, but if 'query'
    // is modified before the timeout expires, the old timeout will be cancelled
    // and a new one started.
    clearTimeout(this.timeout);
    if (e.currentTarget.value.length == 0) {
      this.props.clearSearchResults();
    } else {
      this.timeout = setTimeout(() => {
        if (this.state.query.length > 0)
          this.props.fetchSearchResults(this.state.query);
      }, 300);
    }
  }

  render() {
    const { query, menuOpen } = this.state;
    const { theme, searchResults } = this.props;
    const colorTheme = setOverlay(theme);

    return (
      <div className={`${styles.container} ${colorTheme}`}>
        <div className={styles.box}>
          <div
            className={styles.boxOuter}
            onClick={this.toggleMenu.bind(this)}
          >
            <div className={styles.boxInner}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>
                  <SearchIcon />
                </span>
              </div>
              <input
                type="search"
                className={styles.input}
                value={query}
                onChange={this.updateQuery.bind(this)}
                placeholder="Search"
              />
            </div>
            {menuOpen && (
              <SearchMenu
                results={searchResults}
                query={query}
                {...this.props}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
