import React from 'react';
import Logo from './logo';

const NamedLogo = props => {
  return (
    <div className="lj-logo-named">
      {/* {FIXME: how to adjust svg size with params?} */}
      <span className="lj-logo-text">LittleJohn</span>
      <Logo {...props} />
    </div>
  );
};

export default NamedLogo;
