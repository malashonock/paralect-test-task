import { JobDescription } from 'components/jobs';
import { job } from './mocks/jobs';

export default {
  title: 'Components/JobDescription',
  component: JobDescription,
  parameters: {
    layout: 'centered',
  },
  args: {
    job,
  }
};

export const Default = {};