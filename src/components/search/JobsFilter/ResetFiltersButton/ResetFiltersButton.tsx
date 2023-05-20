import { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './ResetFiltersButton.module.scss';

export const ResetFiltersButton: FunctionComponent = () => {
  return (
    <button className={styles.wrapper}>
      <span className={styles.text}>Сбросить все</span>
      <div className={styles.closeIcon}>
        <div className={cn(styles.line, styles.bl2ur)} />
        <div className={cn(styles.line, styles.ul2br)} />
      </div>
    </button>
  );
}