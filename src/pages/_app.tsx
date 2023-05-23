import { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'store';
import cn from 'classnames';

import { Layout } from 'components/common';

import 'styles/index.scss';
import { inter, poppins, roboto } from 'styles/fonts';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={cn(inter.variable, poppins.variable, roboto.variable)}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
};

export default App;