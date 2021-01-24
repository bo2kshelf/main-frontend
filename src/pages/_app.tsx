import {UserProvider} from '@auth0/nextjs-auth0';
import {AppProps} from 'next/dist/next-server/lib/router/router';
import React from 'react';
import 'tailwindcss/tailwind.css';
import {AppLayout} from '~/components/layout/AppLayout';
import {Configured18nextProvider} from '~/i18n';
import {ConfiguredApolloProvider} from '~/lib/apollo-provider';
import {CurrentUserProvider} from '~/lib/CurrentUserProvider';
import '~/styles/index.css';

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return (
    <UserProvider>
      <ConfiguredApolloProvider>
        <CurrentUserProvider>
          <Configured18nextProvider>
            <AppLayout>
              <PageComponent {...pageProps} />
            </AppLayout>
          </Configured18nextProvider>
        </CurrentUserProvider>
      </ConfiguredApolloProvider>
    </UserProvider>
  );
};

export default App;
