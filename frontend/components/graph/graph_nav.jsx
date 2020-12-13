import React from 'react';

// Nav controls along bottom of graphs to toggle the displayed interval
const GraphNav = ({ intervals, updateInterval }) => {
  const [active, setActive] = React.useState(0);

  return (
    <nav className="lj-graph-nav" bounds="trading">
      <div className="lj-graph-nav-container">
        {intervals.map((interval, idx) => {
          let cname = "lj-graph-nav-button";
          if (active === idx) cname += ' lj-nav-button-active';

          return (
            <button
              type="button"
              className={cname}
              key={idx}
              onClick={() => {
                setActive(idx);
                updateInterval(interval);
              }} >
              <span className="lj-graph-nav-tab-outer">
                <span className="lj-graph-nav-tab">
                  {interval}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default GraphNav;
