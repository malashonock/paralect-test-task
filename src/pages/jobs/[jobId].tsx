import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { JobCard, JobCardVariant, JobDescription } from 'components/jobs';
import { useJob } from 'data/hooks';
import { selectSavedJobIds } from 'store';

import styles from './JobPage.module.scss';
import { LoadingProgress } from 'components/common';

const JobPage: FunctionComponent = () => {
  const { query } = useRouter();
  const { jobId } = query;

  const { job, isLoading } = useJob(jobId as string);
  const savedJobIds = useSelector(selectSavedJobIds);

  return job ? (
    <div className={styles.wrapper}>
      {isLoading ? (
        <LoadingProgress hint="Загрузка данных вакансии..." />
      ) : (
        <>
          <JobCard
            job={job}
            variant={JobCardVariant.Opened}
            isFavorite={savedJobIds.includes(job.id)}
          />
          <JobDescription job={job} />
        </>
      )}
    </div>
  ) : null;
};

export default JobPage;