import { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './EmptyResult.module.scss';
import notFoundImageSrc from '/public/images/not-found.svg';
import Link from 'next/link';

interface EmptyResultProps {
  showHomePageLink?: boolean;
}

export const EmptyResult: FunctionComponent<EmptyResultProps> = ({ showHomePageLink = false }) => {
  return (
    <div className={styles.wrapper}>
      <Image src={notFoundImageSrc} alt="not found" />
      <h2 className={styles.text}>
        Упс, здесь еще ничего нет!
      </h2>
      {showHomePageLink && (
        <Link href="/jobs" className={styles.homeLink}>
          Поиск вакансий
        </Link>
      )}
    </div>
  )
}