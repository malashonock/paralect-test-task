import { Job } from 'data/model';
import styles from './JobDescription.module.scss';
import { FunctionComponent } from 'react';

interface JobDescriptionProps {
  job: Job;
}

export const JobDescription: FunctionComponent<JobDescriptionProps> = ({ job }) => {
  return (
    <div
      className={styles.wrapper}
      dangerouslySetInnerHTML={{
        __html: job.vacancyRichText,
      }}
    />
  );
};