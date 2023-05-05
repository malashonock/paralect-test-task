import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Logo.module.scss';

export const Logo: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.image}>
        <div className={cn(styles.ellipse, styles.ellipse1)} />
        <div className={cn(styles.ellipse, styles.ellipse2)} />
      </figure>
      <span className={styles.text}>
        Jobored
      </span>
    </div>
  );
};