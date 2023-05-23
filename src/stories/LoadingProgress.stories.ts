import { LoadingProgress } from 'components/common';

export default {
  title: 'Components/LoadingProgress',
  component: LoadingProgress,
  parameters: {
    layout: 'centered',
  }
};

export const Default = {
  args: {
    hint: 'Loading...'
  },
};