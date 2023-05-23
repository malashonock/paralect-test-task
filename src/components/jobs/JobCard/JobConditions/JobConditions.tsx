import { FunctionComponent } from 'react';
import cn from 'classnames';

import { JobCardVariant } from '../JobCard';
import { Job } from 'data/model';
import { toSentenceCase } from 'utils';

import styles from './JobConditions.module.scss';

interface JobConditionsProps {
  job: Job;
  variant: JobCardVariant;
}

export const JobConditions: FunctionComponent<JobConditionsProps> = ({ job, variant }) => {
  const { payment_from, payment_to, currency, type_of_work } = job;

  const salary: string = 'з/п ' + (() => {
    switch (true) {
      case payment_from > 0 && payment_to > 0 && payment_from !== payment_to:
        return `${payment_from} - ${payment_to} ${currency}`;
      case payment_from > 0 && payment_to > 0 && payment_from === payment_to:
        return `${payment_from} ${currency}`;
      case payment_from > 0:
        return `от ${payment_from} ${currency}`;
      case payment_to > 0:
        return `до ${payment_from} ${currency}`;
      default:
        return 'по договоренности';
    }
  })();

  return (
    <div className={cn(styles.wrapper, styles[variant])}>
      <span className={styles.salary}>{salary}</span>
      <span className={styles.schedule}>{toSentenceCase(type_of_work.title)}</span>
    </div>
  );
};