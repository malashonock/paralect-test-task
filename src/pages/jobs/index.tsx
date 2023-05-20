import React, { FunctionComponent } from 'react';

import { JobsFilter, SearchBar } from 'components/search';

import styles from './JobsPage.module.scss';

const JobsPage: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <JobsFilter />
      <div className={styles.main}>
        <SearchBar />
        <div className={styles.jobs}>
          Jobs found
        </div>
      </div>
    </div>
  );
};

export default JobsPage;