import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = ({ ...props }) => {

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <PropagateLoader color='#00C805' {...props} />
    </div>
  );
};

export default Loader;
