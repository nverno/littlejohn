import React from 'react';
import { BsExclamationCircle } from 'react-icons/bs';

const DisclosureButton = (props) => {
  const { className } = props;
  return (
    <button type="button" className={`${className}-disclosure-button`}>
      <span className={`${className}-disclosure`}>
        <span className={`${className}-disclosure-icon`}>
          <BsExclamationCircle />
        </span>
        <span className={`${className}-disclosure-text`}>{props.children}</span>
      </span>
    </button>
  );
};

export default DisclosureButton;
