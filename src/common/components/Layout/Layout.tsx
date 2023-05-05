import React, { FunctionComponent, PropsWithChildren } from 'react';
import cn from 'classnames';

import { Navbar } from 'common/components';

import styles from './Layout.module.scss';

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <section className={cn(styles.section, styles.header)}>
        <header className={styles.sectionContent}>
          <Navbar />
        </header>
      </section>
      <section className={cn(styles.section, styles.main)}>
        <main className={styles.sectionContent}>
          {children}
        </main>
      </section>
    </div>
  );
};