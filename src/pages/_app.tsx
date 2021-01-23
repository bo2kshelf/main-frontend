import {UserProvider} from '@auth0/nextjs-auth0';
import clsx from 'clsx';
import {AppProps} from 'next/dist/next-server/lib/router/router';
import React from 'react';
import 'tailwindcss/tailwind.css';
import {HeaderNav} from '~/components/HeaderNav';
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
            <div className={clsx('bg-gray-50', 'min-h-screen')}>
              <HeaderNav className={clsx('w-full', 'h-24')} />
              <div className={clsx('container', 'mx-auto', 'py-12')}>
                <PageComponent {...pageProps} />
              </div>
            </div>
          </Configured18nextProvider>
        </CurrentUserProvider>
      </ConfiguredApolloProvider>
    </UserProvider>
  );
};

export default App;
