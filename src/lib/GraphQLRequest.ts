import {GraphQLClient} from 'graphql-request';
import {getSdk} from '~/graphql/codegen/graphql-request';
import {graphqlConfig} from '~/lib/env';

export const graphqlSdk = getSdk(
  new GraphQLClient(graphqlConfig.externalEndpoint, {
    credentials: 'include',
    headers: {
      // eslint-disable-next-line no-process-env
      Authorization: `Bearer ${process.env.GRAPHQL_API_SERVER_ACCESS_TOKEN}`,
    },
  }),
);
