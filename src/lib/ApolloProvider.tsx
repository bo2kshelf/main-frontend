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
  const httpLink = createHttpLink({uri: graphqlConfig.internalEndpoint});

  const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
