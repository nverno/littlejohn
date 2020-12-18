import React from 'react';

const SidebarContent = ({ footer, ...props }) => {
  return (
    <div className="sidebar-content">
      <div className="sidebar-container lj-theme-overlay">
        <div className="sidebar-outer">
          <div className="sidebar-inner">
            <div className="sidebar-scroll-container">{props.children}</div>
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};

export default SidebarContent;
