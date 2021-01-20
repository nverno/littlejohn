import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setupModal, cleanupModal } from '../../selectors/themes';

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const ThemedModal = ({ theme, isOpen, ...props }) => {
  useEffect(() => {
    if (isOpen) setupModal(theme);
    return () => cleanupModal();
  }, []);

  return (
    <>
      {props.children}
    </>
  );
};

export default connect(mapStateToProps)(ThemedModal);
