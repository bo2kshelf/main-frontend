import {AppProps} from 'next/dist/next-server/lib/router/router';
import React from 'react';
import {RecoilRoot} from 'recoil';
import 'tailwindcss/tailwind.css';
import {AppLayout} from '~/components/layout/AppLayout';
import {Configured18nextProvider} from '~/i18n';
import {ConfiguredApolloProvider} from '~/lib/ApolloProvider';
import {CurrentUser} from '~/lib/CurrentUser';
import '~/styles/index.css';

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return (
    <ConfiguredApolloProvider>
      <Configured18nextProvider>
        <RecoilRoot>
          <CurrentUser />
          <AppLayout>
            <PageComponent {...pageProps} />
          </AppLayout>
        </RecoilRoot>
      </Configured18nextProvider>
    </ConfiguredApolloProvider>
  );
};

export default App;
