import {GraphQLClient} from 'graphql-request';
import {getSdk} from '~/graphql/codegen/graphql-request';
import {GRAPHQL_API_ENDPOINT, GRAPHQL_API_SERVER_ACCESS_TOKEN} from '~/lib/env';

export const graphqlSdk = getSdk(
  new GraphQLClient(GRAPHQL_API_ENDPOINT, {
    headers: {Authorization: `Bearer ${GRAPHQL_API_SERVER_ACCESS_TOKEN}`},
  }),
);
