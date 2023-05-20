import { FunctionComponent } from 'react';

import { ResetFiltersButton } from './ResetFiltersButton';
import { IndustryFilter } from './IndustryFilter';
import { SalaryRangeFilter } from './SalaryRangeFilter';

import styles from './JobsFilter.module.scss';

export const JobsFilter: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>
        <ResetFiltersButton />
      </div>
      <div className={styles.body}>
        <IndustryFilter />
        <SalaryRangeFilter />
        <button className={styles.applyBtn}>Применить</button>
      </div>
    </div>
  );
};