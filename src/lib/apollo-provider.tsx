import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import React from 'react';

export const ConfiguredApolloProvider: React.FC = ({children}) => {
  const httpLink = createHttpLink({uri: '/api/graphql'});

  const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
