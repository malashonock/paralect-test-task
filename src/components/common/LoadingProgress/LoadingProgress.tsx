import { Loader } from '@mantine/core';
import { FunctionComponent } from 'react';

import styles from './LoadingProgress.module.scss';

interface LoadingProgressProps {
  hint?: string;
}

export const LoadingProgress: FunctionComponent<LoadingProgressProps> = ({ hint }) => {
  return (
    <div className={styles.wrapper}>
      <Loader size="lg" />
      {hint ? (
        <p className={styles.hint}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}