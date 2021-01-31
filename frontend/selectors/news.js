const SUMMARY_LENGTH = 160;

export const getSummary = ({ summary }) => {
  if (summary.length < SUMMARY_LENGTH)
    return summary;
  return summary.slice(0, 160) + '...';
};
