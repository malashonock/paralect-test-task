import React, { ComponentPropsWithoutRef, FunctionComponent, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';

import styles from './NavLink.module.scss';

export type NavLinkProps = PropsWithChildren<ComponentPropsWithoutRef<typeof Link>>;

export const NavLink: FunctionComponent<ComponentPropsWithoutRef<typeof Link>> = ({ children, ...linkProps }) => {
  const { pathname } = useRouter();

  const isActive = new RegExp(linkProps.href + '(\/.*)*').test(pathname);

  return (
    <Link 
      {...linkProps}
      className={cn(
        linkProps.className,
        { [styles.active]: isActive },
        styles.link,
      )}>
      {children}
    </Link>
  );
};