import { JobsFilter } from 'components/search';

export default {
  title: 'Components/JobsFilter',
  component: JobsFilter,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    state: {
      industryId: undefined,
      salaryRange: {
        from: undefined,
        to: undefined,
      }
    },
    dispatch: () => undefined,
  },
};
