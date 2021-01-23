import React from 'react';
import styles from './price-graph.module.scss';

// Nav controls along bottom of graphs to toggle the displayed interval
const GraphNav = ({ intervals, updateInterval }) => {
  const [active, setActive] = React.useState(0);

  return (
    <nav className={styles.nav} bounds="trading">
      <div className={styles.navContainer}>
        {intervals.map((interval, idx) => {
          let cname = styles.navButton;
          if (active === idx) cname += ` ${styles.active}`;

          return (
            <button
              type="button"
              className={cname}
              key={idx}
              onClick={() => {
                setActive(idx);
                updateInterval(interval);
              }} >
              <span className={styles.tabOuter}>
                <span className={styles.tab}>
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
