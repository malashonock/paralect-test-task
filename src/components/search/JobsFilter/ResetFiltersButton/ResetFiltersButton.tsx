import { FunctionComponent, memo } from 'react';
import cn from 'classnames';

import styles from './ResetFiltersButton.module.scss';

interface ResetFiltersButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const ResetFiltersButton: FunctionComponent<ResetFiltersButtonProps> = memo(({ onClick, disabled }) => {
  return (
    <button className={styles.wrapper} onClick={onClick} disabled={disabled}>
      <span className={styles.text}>Сбросить все</span>
      <div className={styles.closeIcon}>
        <div className={cn(styles.line, styles.bl2ur)} />
        <div className={cn(styles.line, styles.ul2br)} />
      </div>
    </button>
  );
});

ResetFiltersButton.displayName = 'ResetFiltersButton';