import { FunctionComponent } from 'react';
import cn from 'classnames';

import { Job } from 'data/model';
import { JobCardVariant } from '../JobCard';
import { LocationIcon } from '../LocationIcon';

import styles from './JobLocation.module.scss';

interface JobLocationProps {
  job: Job;
  variant: JobCardVariant;
  className?: string;
}

export const JobLocation: FunctionComponent<JobLocationProps> = ({ job, variant, className }) => {
  const { town } = job;

  return (
    <div className={cn(className, styles.wrapper, styles[variant])}>
      <LocationIcon />
      <span className={styles.text}>{town.title}</span>
    </div>
  );
};