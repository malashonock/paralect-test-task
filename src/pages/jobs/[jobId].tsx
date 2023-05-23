import React, { FunctionComponent } from 'react';

import { JobCard, JobCardVariant, JobDescription } from 'components/jobs';
import { useJob } from 'data/hooks';

import styles from './JobPage.module.scss';
import { useRouter } from 'next/router';

const JobPage: FunctionComponent = () => {
  const { query } = useRouter();
  const { jobId } = query;

  const { job } = useJob(jobId as string);

  return job ? (
    <div className={styles.wrapper}>
      <JobCard job={job} variant={JobCardVariant.Opened} />
      <JobDescription job={job} />
    </div>
  ) : null;
};

export default JobPage;