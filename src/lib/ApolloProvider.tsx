import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import React from 'react';
import {graphqlConfig} from '~/lib/env';

export const ConfiguredApolloProvider: React.FC = ({children}) => {
  const httpLink = createHttpLink({
    uri: graphqlConfig.externalEndpoint,
    credentials: 'include',
  });

  const client = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
