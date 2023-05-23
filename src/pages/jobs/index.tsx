import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';

import { JobsFilter, SearchBar } from 'components/search';
import { JobCard, JobCardVariant } from 'components/jobs';
import { EmptyResult, LoadingProgress, Pagination } from 'components/common';
import { Job } from 'data/model';
import { useJobs } from 'data/hooks';
import { selectSavedJobIds, selectSearchCriteria } from 'store';

import styles from './JobsPage.module.scss';

const JobsPage: FunctionComponent = () => {
  const searchCriteria = useSelector(selectSearchCriteria);
  const { industryId, salaryFrom, salaryTo, jobQuery } = searchCriteria;

  const [activePage, setActivePage] = useState(1);
  const MAX_CARDS_PER_PAGE = 4;

  const { jobsList, isLoading } = useJobs({
    catalogues: industryId,
    payment_from: salaryFrom,
    payment_to: salaryTo,
    keyword: jobQuery,
    page: activePage - 1,
    count: MAX_CARDS_PER_PAGE,
  });

  const pageCount = Math.ceil(jobsList?.total / MAX_CARDS_PER_PAGE || 0);

  const savedJobIds = useSelector(selectSavedJobIds);

  return (
    <div className={styles.wrapper}>
      <JobsFilter className={styles.filters} />
      <SearchBar className={styles.searchBar} />
      {jobsList?.objects.length > 0 ? (
        <>
          <div className={styles.jobs}>
            {jobsList.objects.map((job: Job): JSX.Element => (
              <JobCard
                key={job.id}
                job={job}
                variant={JobCardVariant.Link}
                isFavorite={savedJobIds.includes(job.id)}
              />
            ))}
          </div>
          <Pagination
            pageCount={pageCount}
            activePage={activePage}
            onPageChange={setActivePage}
            className={styles.pagination}
          />
        </>
      ) : (
        isLoading ? (
          <LoadingProgress hint="Загружаем вакансии..." />
        ) : (
          <EmptyResult />
        )
      )}
    </div>
  );
};

export default JobsPage;