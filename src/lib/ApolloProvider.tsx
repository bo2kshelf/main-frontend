import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {ApolloProvider} from '@apollo/react-hooks';
import React from 'react';
import {
  AUTHENTICATED_API_ENDPOINT,
  AUTH_SERVER_TOKEN_ENDPOINT,
} from '~/lib/env';

export const getToken = async (): Promise<string | void> => {
  return fetch(AUTH_SERVER_TOKEN_ENDPOINT, {
    credentials: 'include',
  })
    .then((res) => {
      return res.status >= 400 ? undefined : res.text();
    })
    .catch(() => {});
};

export const ConfiguredApolloProvider: React.FC = ({children}) => {
  const httpLink = createHttpLink({
    uri: AUTHENTICATED_API_ENDPOINT,
  });

  const authLink = setContext(async (_, {headers}) => {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
