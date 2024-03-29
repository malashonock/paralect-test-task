import { FunctionComponent } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { Job } from 'data/model';
import { JobTitle } from './JobTitle';
import { JobConditions } from './JobConditions';
import { JobLocation } from './JobLocation';
import { FavoriteToggle } from './FavoriteToggle';

import styles from './JobCard.module.scss';
import { ConditionalWrapper } from 'components/common';

export enum JobCardVariant {
  Link = 'link',
  Opened = 'opened',
}

interface JobCardProps {
  job: Job;
  variant: JobCardVariant;
  isFavorite: boolean;
}

export const JobCard: FunctionComponent<JobCardProps> = (cardProps) => {
  const { job, variant, isFavorite } = cardProps;
  
  return (
    <ConditionalWrapper
      condition={variant === JobCardVariant.Link}
      wrapperIfTrue={Link}
      wrapperIfTrueProps={{
        href: `/jobs/${job.id}`,
      }}
      wrapperIfFalse="div"
      commonProps={{
        className: cn(styles.wrapper, styles[variant]),
        'data-elem': `vacancy-${job.id}`,
      }}
    >
      <JobTitle className={styles.title} {...cardProps} />
      <JobConditions className={styles.conditions} {...cardProps} />
      <JobLocation className={styles.location} {...cardProps} />
      <FavoriteToggle className={styles.favoriteBtn} {...cardProps} isFavorite={isFavorite} />
    </ConditionalWrapper>
  );
};