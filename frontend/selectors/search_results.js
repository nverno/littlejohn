// Formatting for search results in search menu
// 1. Pull out the symbol/name
// 2. Trim name
// 3. Split results where query is matched to highlight in menu
export const formatSearchResults = (query, results) => {
  if (!results) return null;

  const formatted = results.map((res) => {
    const symbol = res['1. symbol'];
    return {
      symbol: splitByMatches(query, symbol),
      name: splitByMatches(query, res['2. name']),
      matchScore: parseFloat(res['9. matchScore']),
      linkName: `/stocks/${symbol}`,
    };
  });

  return formatted;
};

const splitByMatches = (q, str) => {
  if (q.length === 0) return [];
  let m,
    i = 0,
    parts = [];
  const re = new RegExp(q, 'ig');

  while ((m = re.exec(str)) && i < str.length) {
    m.index > 0 &&
      parts.push({
        match: false,
        value: str.slice(i, m.index),
      });
    parts.push({
      match: true,
      value: str.slice(m.index, m.index + q.length),
    });
    i = m.index + q.length;
  }

  i < str.length &&
    parts.push({
      match: false,
      value: str.slice(i),
    });

  return parts;
};
