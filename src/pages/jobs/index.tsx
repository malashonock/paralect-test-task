import React, { FunctionComponent } from 'react';

import { JobsFilter } from 'common/components';

import styles from './JobsPage.module.scss';

const JobsPage: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <JobsFilter />
      <div className={styles.main}>
        <input type="text" placeholder="Введите название вакансии" />
        <div className={styles.jobs}>
          Jobs found
        </div>
      </div>
    </div>
  );
};

export default JobsPage;