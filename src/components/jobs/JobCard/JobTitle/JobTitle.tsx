import { FunctionComponent } from 'react';
import cn from 'classnames';

import { JobCardVariant } from '../JobCard';
import { Job } from 'data/model';

import styles from './JobTitle.module.scss';

interface JobTitleProps {
  job: Job;
  variant: JobCardVariant;
  className?: string;
}

export const JobTitle: FunctionComponent<JobTitleProps> = ({ job, variant, className }) => {
  const { profession } = job;

  return (
    <h1 className={cn(className, styles.text, styles[variant])}>
      {profession}
    </h1>
  );
};