import { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './MagnifierIcon.module.scss';
import magnifierIconSrc from '/public/icons/magnifier.svg';

export const MagnifierIcon: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.icon}
        alt="shevron"
        src={magnifierIconSrc}
      />
    </div>
  );
};