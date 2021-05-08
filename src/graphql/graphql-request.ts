import {GraphQLClient} from 'graphql-request';
import {getSdk} from '~/graphql/codegen/graphql-request';
import {API_GRAPHQL_ENDPOINT} from '~/lib/env';

export const graphqlSdk = getSdk(new GraphQLClient(API_GRAPHQL_ENDPOINT));
export * from './codegen/graphql-request';
