import React from 'react';

import SearchResults from './search_results';
import styles from './search-menu.module.scss';

const SearchMenu = ({ query, searchResults, ...props }) => {
  // const [selected, setSelected] = React.useState(0);
  const results = !searchResults
        ? null
        : (!searchResults.length && query // && query.length
           ? 'We were unable to find any results for your search.'
           : <SearchResults items={searchResults} query={query} {...props} />);

  return (
    <div>
      <div className={styles.fadeIn}>
        <div className={styles.outer}>
          <section>
            <h4>Stocks</h4>
          </section>
          {results}
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
