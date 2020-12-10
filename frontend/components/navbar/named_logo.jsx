import React from 'react';
import Logo from './logo';

const NamedLogo = () => {
  return (
    <div className="lj-logo-named">
      {/* {FIXME: how to adjust svg size with params?} */}
      <span className="lj-logo-text">LittleJohn</span>
      <Logo />
    </div>
  );
};

export default NamedLogo;
