import React from 'react';
import styles from '../../styles/button.module.scss';
import fonts from '../../styles/font.module.scss';

export const ToggleButton = ({ toggle, setToggle, lessText, moreText }) => (
  <button type="button" className={styles.primary}>
    <span
      className={`${fonts.type4} ${fonts.default}`}
      onClick={() => setToggle((toggle) => !toggle)}
    >
      {toggle ? lessText : moreText}
    </span>
  </button>
);

export const ShowMoreButton = (props) => (
  <ToggleButton lessText="Show Less" moreText="Show More" {...props} />
);

export const ReadMoreButton = (props) => (
  <ToggleButton lessText="Read Less" moreText="Read More" {...props} />
);
