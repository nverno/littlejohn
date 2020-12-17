import React from 'react';

const SidebarContent = props => {

  return (
    <div className="sidebar-content">
      <div className="sidebar-container lj-theme-overlay">
        <div className="sidebar-outer">
          <div className="sidebar-inner">
            <div className="sidebar-scroll-container">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
