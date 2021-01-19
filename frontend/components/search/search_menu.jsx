import React from 'react';

import SearchResults from './search_results';
import styles from './search-menu.module.scss';

const SearchMenu = ({ searchResults, ...props }) => {
  // const [selected, setSelected] = React.useState(0);
  return (
    <div>
      <div className={styles.fadeIn}>
        <div className={styles.outer}>
          <section>
            <h4>Stocks</h4>
          </section>
          {searchResults &&
            (searchResults.length === 0 ? (
              'We were unable to find any results for your search.'
            ) : (
              <SearchResults
                items={searchResults}
                /* selected={selected} */
                /* setSelected={setSelected} */
                {...props}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
