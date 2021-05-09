import {AppProps} from 'next/dist/next-server/lib/router/router';
import React from 'react';
import {RecoilRoot} from 'recoil';
import SuperTokensReact from 'supertokens-auth-react';
import SuperTokensNode from 'supertokens-node';
import 'tailwindcss/tailwind.css';
import {
  supertokensBackendConfig,
  supertokensFrontendConfig,
} from '~/configs/supertokens';
import {ConfiguredApolloProvider} from '~/graphql/apollo';
import {Configured18nextProvider} from '~/i18n';
import {AppLayout} from '~/layouts/AppLayout';
import '~/styles/index.css';

// eslint-disable-next-line no-negated-condition
if (typeof window !== 'undefined') {
  SuperTokensReact.init(supertokensFrontendConfig);
} else {
  SuperTokensNode.init(supertokensBackendConfig);
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
