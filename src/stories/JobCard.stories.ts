import { JobCard, JobCardVariant } from 'components/jobs';
import { job } from './mocks/jobs';

export default {
  title: 'Components/JobCard',
  component: JobCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    job,
  }
};

export const Link = {
  args: {
    variant: JobCardVariant.Link,
  },
};

export const Opened = {
  args: {
    variant: JobCardVariant.Opened,
  },
};
