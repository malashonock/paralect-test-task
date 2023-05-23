import { FunctionComponent } from 'react';
import { Pagination as PaginationBase } from '@mantine/core';

import styles from './Pagination.module.scss';

interface PaginationProps {
  activePage: number;
  onPageChange: (page: number) => void;
  pageCount: number;
}

export const Pagination: FunctionComponent<PaginationProps> = ({ activePage, onPageChange, pageCount }) => {
  return (
    <PaginationBase
      total={pageCount}
      value={activePage}
      onChange={onPageChange}
      className={styles.wrapper}
      classNames={{
        control: styles.button,
      }}
    />
  );
};