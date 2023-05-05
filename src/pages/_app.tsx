import { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import cn from 'classnames';

import { Layout } from 'common/components';

import 'styles/index.scss';
import { inter, poppins } from 'styles/fonts';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={cn(inter.variable, poppins.variable)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;