import {AppProps} from 'next/dist/next-server/lib/router/router';
import React from 'react';
import {RecoilRoot} from 'recoil';
import SuperTokensReact from 'supertokens-auth-react';
import 'tailwindcss/tailwind.css';
import {supertokensFrontendConfig} from '~/configs/supertokens';
import {ConfiguredApolloProvider} from '~/graphql/apollo';
import {Configured18nextProvider} from '~/i18n';
import {AppLayout} from '~/layouts/AppLayout';
import '~/styles/index.css';

if (typeof window !== 'undefined') {
  SuperTokensReact.init(supertokensFrontendConfig);
}
export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return (
    <ConfiguredApolloProvider>
      <Configured18nextProvider>
        <RecoilRoot>
          <AppLayout>
            <PageComponent {...pageProps} />
          </AppLayout>
        </RecoilRoot>
      </Configured18nextProvider>
    </ConfiguredApolloProvider>
  );
};

export default App;
