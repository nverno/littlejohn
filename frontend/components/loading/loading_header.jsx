import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useLocation } from 'react-router-dom';

const LoadingHeader = () => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [location]);

  let cname = 'lj-loading-header';
  if (loading) cname += ' lj-loading-flash';

  return (
    <div className="lj-loading-header-container">
      <div className={cname}></div>
    </div>
  );
};

export default withRouter(connect(null)(LoadingHeader));
