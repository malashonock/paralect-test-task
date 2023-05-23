import { FunctionComponent } from 'react';
import cn from 'classnames';

import { Job } from 'data/model';
import { JobCardVariant } from '../JobCard';
import { LocationIcon } from '../LocationIcon';

import styles from './JobLocation.module.scss';

interface JobLocationProps {
  job: Job;
  variant: JobCardVariant;
}

export const JobLocation: FunctionComponent<JobLocationProps> = ({ job, variant }) => {
  const { town } = job;

  return (
    <div className={cn(styles.wrapper, styles[variant])}>
      <LocationIcon />
      <span className={styles.text}>{town.title}</span>
    </div>
  );
};