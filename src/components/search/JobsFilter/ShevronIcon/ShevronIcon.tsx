import { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './ShevronIcon.module.scss';
import shevronIconSrc from '/public/icons/shevron.svg';

export const ShevronIcon: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.icon}
        alt="shevron"
        src={shevronIconSrc}
      />
    </div>
  );
};