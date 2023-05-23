import { FunctionComponent } from 'react';
import { Pagination as PaginationBase } from '@mantine/core';
import cn from 'classnames';

import styles from './Pagination.module.scss';

interface PaginationProps {
  activePage: number;
  onPageChange: (page: number) => void;
  pageCount: number;
  className?: string;
}

export const Pagination: FunctionComponent<PaginationProps> = ({ activePage, onPageChange, pageCount, className }) => {
  return (
    <PaginationBase
      total={pageCount}
      value={activePage}
      onChange={onPageChange}
      className={cn(className, styles.wrapper)}
      classNames={{
        control: styles.button,
      }}
    />
  );
};