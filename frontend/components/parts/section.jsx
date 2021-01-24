import React from 'react';
import styles from './section.module.scss';

export const SectionHeader = ({ title, ...props }) => (
  <header>
    <div className={styles.header}>
      <div className={styles.outer}>
        <h2>{title}</h2>
      </div>
      {props.children}
    </div>
  </header>
);

export const Section = (props) => (
  <section className={styles.section}>{props.children}</section>
);
