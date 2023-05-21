import React, { FunctionComponent, useReducer } from 'react';

import { JobsFilter, SearchBar } from 'components/search';
import { searchReducer, initialSearchState } from 'reducers/search';

import styles from './JobsPage.module.scss';

const JobsPage: FunctionComponent = () => {
  const [searchState, dispatch] = useReducer(searchReducer, initialSearchState);

  return (
    <div className={styles.wrapper}>
      <JobsFilter
        state={{
          industryId: searchState.industryId,
          salaryRange: searchState.salaryRange,
        }}
        dispatch={dispatch}
      />
      <div className={styles.main}>
        <SearchBar
          state={{
            jobQuery: searchState.jobQuery,
          }}
          dispatch={dispatch}
        />
        <div className={styles.jobs}>
          {JSON.stringify(searchState)}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;