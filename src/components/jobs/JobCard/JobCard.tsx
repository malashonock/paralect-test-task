import { FunctionComponent } from 'react';
import cn from 'classnames';

import { Job } from 'data/model';

import styles from './JobCard.module.scss';
import { JobTitle } from './JobTitle';
import { JobConditions } from './JobConditions';
import { JobLocation } from './JobLocation';
import { FavoriteToggle } from './FavoriteToggle';

export enum JobCardVariant {
  Link = 'link',
  Opened = 'opened',
}

interface JobCardProps {
  job: Job;
  variant: JobCardVariant;
}

export const JobCard: FunctionComponent<JobCardProps> = (cardProps) => {
  const { variant } = cardProps;

  return (
    <div className={cn(styles.wrapper, styles[variant])}>
      <div className={styles.main}>
        <JobTitle {...cardProps} />
        <JobConditions {...cardProps} />
        <JobLocation {...cardProps} />
      </div>
      <div className={styles.aside}>
        <FavoriteToggle {...cardProps} />
      </div>
    </div>
  );
};