import React, { FunctionComponent } from 'react';

import { Logo, NavLink } from 'common/components';

import styles from './Navbar.module.scss';

export const Navbar: FunctionComponent = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.links}>
        <NavLink href="/jobs">Поиск вакансий</NavLink>
        <NavLink href="/favorites">Избранное</NavLink>
      </div>
    </nav>
  );
};