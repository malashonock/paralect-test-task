import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

import { JobCard, JobCardVariant } from 'components/jobs';
import { EmptyResult, LoadingProgress, Pagination } from 'components/common';
import { Job } from 'data/model';
import { useJobs } from 'data/hooks';
import { selectSavedJobIds } from 'store';

import styles from './FavoritesPage.module.scss';

const FavoritesPage: FunctionComponent = () => {
  const savedJobIds = useSelector(selectSavedJobIds);

  const [activePage, setActivePage] = useState(1);
  const MAX_CARDS_PER_PAGE = 4;

  const { jobsList, isLoading } = useJobs({
    ids: savedJobIds.length > 0 ? savedJobIds : [-1],
    page: activePage - 1,
    count: MAX_CARDS_PER_PAGE,
  });

  const pageCount = Math.ceil(jobsList?.total / MAX_CARDS_PER_PAGE || 0);

  return (
    <div className={styles.wrapper}>
      {jobsList?.objects.length > 0 ? (
        <>
          {jobsList.objects.map((job: Job): JSX.Element => (
            <JobCard
              key={job.id}
              job={job}
              variant={JobCardVariant.Link}
              isFavorite
            />
          ))}
          <Pagination pageCount={pageCount} activePage={activePage} onPageChange={setActivePage} />
        </>
      ) : (
        isLoading ? (
          <LoadingProgress hint="Загружаем сохраненные вакансии..." />
        ) : (
          <EmptyResult showHomePageLink />
        )
      )}
    </div>
  );
};

export default FavoritesPage;