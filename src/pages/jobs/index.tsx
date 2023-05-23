import React, { FunctionComponent, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';

import { JobsFilter, SearchBar } from 'components/search';
import { JobCard, JobCardVariant } from 'components/jobs';
import { EmptyResult, LoadingProgress, Pagination } from 'components/common';
import { searchReducer, initialSearchState } from 'reducers/search';
import { Job } from 'data/model';
import { useJobs } from 'data/hooks';
import { selectSavedJobIds } from 'store';

import styles from './JobsPage.module.scss';

const JobsPage: FunctionComponent = () => {
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState);
  const { industryId, salaryRange, jobQuery } = searchState;

  const [activePage, setActivePage] = useState(1);
  const MAX_CARDS_PER_PAGE = 4;

  const { jobsList, isLoading } = useJobs({
    catalogues: industryId,
    payment_from: salaryRange.from,
    payment_to: salaryRange.to,
    keyword: jobQuery,
    page: activePage - 1,
    count: MAX_CARDS_PER_PAGE,
  });

  const pageCount = Math.ceil(jobsList?.total / MAX_CARDS_PER_PAGE || 0);

  const savedJobIds = useSelector(selectSavedJobIds);

  return (
    <div className={styles.wrapper}>
      <JobsFilter
        state={{
          industryId: searchState.industryId,
          salaryRange: searchState.salaryRange,
        }}
        dispatch={dispatch}
        className={styles.filters}
      />
      <SearchBar
        state={{
          jobQuery: searchState.jobQuery,
        }}
        dispatch={dispatch}
        className={styles.searchBar}
      />
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