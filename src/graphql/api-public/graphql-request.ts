import {GraphQLClient} from 'graphql-request';
import {getSdk} from '~/graphql/api-public/codegen/graphql-request';
import {PUBLIC_API_ACCESS_TOKEN, PUBLIC_API_ENDPOINT} from '~/lib/env';

export const graphqlSdk = getSdk(
  new GraphQLClient(PUBLIC_API_ENDPOINT, {
    headers: {Authorization: `Bearer ${PUBLIC_API_ACCESS_TOKEN}`},
  }),
);
