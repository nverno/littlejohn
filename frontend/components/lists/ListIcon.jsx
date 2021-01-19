import React from 'react';

const ListIcon = props => {
  return (
    <div className="list-cell-icon-outer">
      <div className="list-cell-icon-inner">
        <div className="list-cell-icon">
          <div aria-label="light bulb"
               role="img"
               className="icon-lightbulb">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListIcon;
