import cn from 'classnames';

import '../src/styles/index.scss';
import { inter, poppins } from '../src/styles/fonts';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={cn(inter.variable, poppins.variable)}>
        <Story />
      </div>
    ),
  ]
};

export default preview;
