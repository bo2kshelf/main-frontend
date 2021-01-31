import {GraphQLClient} from 'graphql-request';
import {graphqlConfig} from '~/lib/env';
import {getSdk} from '~/_generated/graphql-request';

export const graphqlSdk = getSdk(
  new GraphQLClient(graphqlConfig.externalEndpoint, {
    credentials: 'include',
  }),
);
