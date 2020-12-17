import React from 'react';

const PortfolioSidebarHeader = ({ title, ...props }) => {

  return (
    <div className="port-sidebar-header-container">
      <div style={{margin: '0'}}>
        <header className="port-sidebar-header">
          <span className="lj-type8 port-sidebar-header-text">{title}</span>
          {props.children}
        </header>
      </div>
    </div>
  );
};
export default PortfolioSidebarHeader;
