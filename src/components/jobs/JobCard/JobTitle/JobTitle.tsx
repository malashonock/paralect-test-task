import { FunctionComponent } from 'react';
import cn from 'classnames';

import { JobCardVariant } from '../JobCard';
import { Job } from 'data/model';

import styles from './JobTitle.module.scss';

interface JobTitleProps {
  job: Job;
  variant: JobCardVariant;
}

export const JobTitle: FunctionComponent<JobTitleProps> = ({ job, variant }) => {
  const { profession } = job;

  return (
    <h1 className={cn(styles.text, styles[variant])}>
      {profession}
    </h1>
  );
};