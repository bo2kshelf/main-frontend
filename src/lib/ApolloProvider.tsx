import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {ApolloProvider} from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import jwt from 'jsonwebtoken';
import React from 'react';
import {
  AUTH_SERVER_TOKEN_ENDPOINT,
  GRAPHQL_API_ENDPOINT,
  SESSION_STORAGE_API_TOKEN_KEY,
} from '~/lib/env';

export const getToken = async (): Promise<string | void> => {
  const stored = sessionStorage.getItem(SESSION_STORAGE_API_TOKEN_KEY);

  if (stored) {
    const decoded = jwt.decode(stored);
    if (
      decoded &&
      typeof decoded !== 'string' &&
      Date.now() / 1000 < decoded.exp
    ) {
      return stored;
    } else {
      sessionStorage.removeItem(SESSION_STORAGE_API_TOKEN_KEY);
    }
  }

  const fetched = await fetch(AUTH_SERVER_TOKEN_ENDPOINT, {
    credentials: 'include',
  }).then((res) => {
    return res.status >= 400 ? undefined : res.text();
  });

  if (fetched) {
    sessionStorage.setItem(SESSION_STORAGE_API_TOKEN_KEY, fetched);
    return fetched;
  }
};

export const ConfiguredApolloProvider: React.FC = ({children}) => {
  const httpLink = createHttpLink({
    uri: GRAPHQL_API_ENDPOINT,
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
