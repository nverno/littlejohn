import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import SearchResults from './search_results';
import styles from './search-menu.module.scss';

const SearchMenu = ({ query, searchResults, loading, ...props }) => {
  // const [selected, setSelected] = React.useState(0);
  const results = !searchResults || loading
        ? <BeatLoader />
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
          {loading
           ? <div className={styles.loading}>{results}</div>
           : results}
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
