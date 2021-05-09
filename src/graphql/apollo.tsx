import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import React from 'react';
import {GRAPHQL_API_ENDPOINT} from '~/configs/api';

export const ConfiguredApolloProvider: React.FC = ({children}) => {
  const httpLink = createHttpLink({
    uri: GRAPHQL_API_ENDPOINT,
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
export * from './codegen/apollo';
