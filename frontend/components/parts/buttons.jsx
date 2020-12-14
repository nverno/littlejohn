import React from 'react';

export const ToggleButton = ({ toggle, setToggle, lessText, moreText }) => (
  <button type="button" className="lj-btn-primary">
    <span
      className="lj-type4 lj-default-text"
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
