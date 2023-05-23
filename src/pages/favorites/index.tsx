import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { JobCard, JobCardVariant } from 'components/jobs';
import { Job } from 'data/model';
import { useJobs } from 'data/hooks';
import { selectSavedJobIds } from 'store';

import styles from './FavoritesPage.module.scss';

const FavoritesPage: FunctionComponent = () => {
  const savedJobIds = useSelector(selectSavedJobIds);

  const { jobsList } = useJobs({
    ids: savedJobIds,
    // TODO: implement pagination
    page: 0,
  });

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
    </div>
  );
};

export default FavoritesPage;