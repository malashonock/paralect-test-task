import React, { FunctionComponent, useReducer } from 'react';
import { useSelector } from 'react-redux';

import { JobsFilter, SearchBar } from 'components/search';
import { JobCard, JobCardVariant } from 'components/jobs';
import { searchReducer, initialSearchState } from 'reducers/search';
import { Job } from 'data/model';
import { useJobs } from 'data/hooks';
import { selectSavedJobIds } from 'store';

import styles from './JobsPage.module.scss';

const JobsPage: FunctionComponent = () => {
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState);

  const { industryId, salaryRange, jobQuery } = searchState;

  const { jobsList } = useJobs({
    catalogues: industryId,
    payment_from: salaryRange.from,
    payment_to: salaryRange.to,
    keyword: jobQuery,
    // TODO: implement pagination
    page: 1,
  });

  const savedJobIds = useSelector(selectSavedJobIds);

  return (
    <div className={styles.wrapper}>
      <div className={styles.aside}>
        <JobsFilter
          state={{
            industryId: searchState.industryId,
            salaryRange: searchState.salaryRange,
          }}
          dispatch={dispatch}
        />
      </div>
      <div className={styles.main}>
        <SearchBar
          state={{
            jobQuery: searchState.jobQuery,
          }}
          dispatch={dispatch}
        />
        <div className={styles.jobs}>
          {jobsList?.objects.map((job: Job): JSX.Element => (
            <JobCard
              key={job.id}
              job={job}
              variant={JobCardVariant.Link}
              isFavorite={savedJobIds.includes(job.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;