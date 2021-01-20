import React from 'react';
import { Link } from 'react-router-dom';

import { formatSearchResults } from '../../selectors/search_results';
import styles from './search-menu.module.scss';

const SearchResults = ({ results, query, ...props }) => {
  console.log("results: ", results);
  console.log("query: ", query);
  if (!query || !results) return null;
  const formatted = formatSearchResults(query, results);
  if (!formatted) return null;
  console.log("formatted: ", formatted);
  return (
    <>
      {formatted.map((result, idx) => (
        <SearchResult key={idx} result={result} {...props} />
      ))}
    </>
  );
};

export const SearchResult = ({ result, selected }) => {
  const { linkName, symbol, name } = result;
  return (
    <div
      className={styles.results}
      /* role="option" */
      /* aria-selected={selected} */
    >
      <Link to={linkName} className={styles.link}>
        <div className={styles.symbol}>
          <span>
            {symbol.map((part, idx) => (
              <span key={idx} className={part.match ? styles.match : ''}>
                {part.value}
              </span>
            ))}
          </span>
        </div>
        <div className={styles.company}>
          <span>
            {name.map((part, idx) => (
              <span key={idx} className={part.match ? styles.match : ''}>
                {part.value}
              </span>
            ))}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SearchResults;
