import React from 'react';
import { SpinnerDotted } from './SpinnerDotted';

const Spinner = (props) => (
  <div
    className="loading"
    style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <SpinnerDotted
      size={50}
      thickness={100}
      speed={100}
      color="rgba(0,200,5)"
      {...props}
    />
  </div>
);

export default Spinner;
