import {GraphQLClient} from 'graphql-request';
import {getSdk} from '~/graphql/codegen/graphql-request';
import {GRAPHQL_API_ENDPOINT} from '~/lib/env';

export const graphqlSdk = getSdk(new GraphQLClient(GRAPHQL_API_ENDPOINT));
export * from './codegen/graphql-request';
