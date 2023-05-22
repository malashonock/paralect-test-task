import { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './LocationIcon.module.scss';
import locationIconSrc from '/public/icons/location.svg';

export const LocationIcon: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.icon}
        alt="location"
        src={locationIconSrc}
      />
    </div>
  );
};