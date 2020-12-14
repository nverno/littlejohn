import React from 'react';
import { Link } from 'react-router-dom';

import { formatSearchResults } from '../../selectors/search_results';

const SearchResults = ({ results, query, ...props }) => {
  console.log('results: ', results);
  const formatted = formatSearchResults(query, results);
  console.log('formatted: ', formatted);
  if (!formatted) return null;
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
      className="search-result-container"
      role="option"
      /* aria-selected={selected} */
    >
      <Link to={linkName}>
        <div className="search-result-symbol">
          <span>
            {symbol.map((part, idx) => (
              <span key={idx} className={part.match ? 'lj-primary' : ''}>
                {part.value}
              </span>
            ))}
          </span>
        </div>
        <div className="search-result-company">
          <span>
            {name.map((part, idx) => (
              <span key={idx} className={part.match ? 'lj-primary' : ''}>
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
