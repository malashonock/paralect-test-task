import { FunctionComponent } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { JobCardVariant } from '../JobCard';
import { Job } from 'data/model';

import styles from './JobTitle.module.scss';

interface JobTitleProps {
  job: Job;
  variant: JobCardVariant;
}

export const JobTitle: FunctionComponent<JobTitleProps> = ({ job, variant }) => {
  const { id, profession } = job;

  return variant === JobCardVariant.Link ? (
    <Link href={`/jobs/${id}`} className={cn(styles.text, styles[JobCardVariant.Link])}>
      {profession}
    </Link>
  ) : (
    <h1 className={cn(styles.text, styles[JobCardVariant.Opened])}>
      {profession}
    </h1>
  );
};