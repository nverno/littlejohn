import React from 'react';
import { connect } from 'react-redux';
import styles from './sidebar.module.scss';
import themes from '../../styles/theme.module.scss';

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const SidebarContent = ({ footer, theme, ...props }) => {
  const colorTheme = theme === 'dark' ? themes.overlayDark : themes.overlay;

  return (
    <div className={styles.content}>
      <div className={`${styles.container} ${colorTheme}`}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.scroll}>{props.children}</div>
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};

export default connect(mapStateToProps)(SidebarContent);
