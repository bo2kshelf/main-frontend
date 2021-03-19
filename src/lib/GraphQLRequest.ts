import {GraphQLClient} from 'graphql-request';
import {graphqlConfig} from '~/lib/env';
import {getSdk} from '~/_generated/graphql-request';

export const graphqlSdk = getSdk(
  new GraphQLClient(graphqlConfig.externalEndpoint, {
    credentials: 'include',
    headers: {
      // eslint-disable-next-line no-process-env
      Authorization: `Bearer ${process.env.GRAPHQL_API_SERVER_ACCESS_TOKEN}`,
    },
  }),
);
