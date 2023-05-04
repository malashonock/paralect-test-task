import { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import cn from 'classnames';

import 'styles/index.scss';
import { inter, poppins } from 'styles/fonts';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={cn(inter.variable, poppins.variable)}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;