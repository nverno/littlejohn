import React from 'react';

import SearchIcon from './search_icon';
import SearchMenu from './search_menu';

// TODO: clicking elsewhere should also close search menu
const Search = ({ searchResults, fetchSearchResults, ...props }) => {
  const [query, setQuery] = React.useState('');
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Debounce search results to avoid making too many fetches back-to-back
  // This should start a timeout when 'query' changes, but if 'query'
  // is modified before the timeout expires, the old timeout will be cancelled
  // and a new one started.
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      fetchSearchResults(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="search-container">
      <div className="search-box">
        <div
          className="search-box-outer"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className="search-box-inner">
            <div className="search-icon-container">
              <span className="search-icon">
                <SearchIcon />
              </span>
            </div>
            <input
              type="search"
              className="lj-type1 search-input"
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
              placeholder="Search"
            />
          </div>
          {menuOpen && <SearchMenu results={searchResults} {...props} />}
        </div>
      </div>
    </div>
  );
};

export default Search;
