import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

import { JobCard, JobCardVariant } from 'components/jobs';
import { Pagination } from 'components/common';
import { Job } from 'data/model';
import { useJobs } from 'data/hooks';
import { selectSavedJobIds } from 'store';

import styles from './FavoritesPage.module.scss';

const FavoritesPage: FunctionComponent = () => {
  const savedJobIds = useSelector(selectSavedJobIds);

  const [activePage, setActivePage] = useState(1);
  const MAX_CARDS_PER_PAGE = 4;

  const { jobsList } = useJobs({
    ids: savedJobIds,
    page: activePage - 1,
    count: MAX_CARDS_PER_PAGE,
  });

  const pageCount = Math.ceil(jobsList?.total / MAX_CARDS_PER_PAGE || 0);

  return (
    <div className={styles.wrapper}>
      {jobsList?.objects.map((job: Job): JSX.Element => (
        <JobCard
          key={job.id}
          job={job}
          variant={JobCardVariant.Link}
          isFavorite
        />
      ))}
      <Pagination pageCount={pageCount} activePage={activePage} onPageChange={setActivePage} />
    </div>
  );
};

export default FavoritesPage;