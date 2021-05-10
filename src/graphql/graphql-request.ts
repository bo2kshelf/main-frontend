import {GraphQLClient} from 'graphql-request';
import {API_GRAPHQL_ENDPOINT} from '~/configs/api';
import {getSdk} from '~/graphql/codegen/graphql-request';

export const graphqlSdk = getSdk(new GraphQLClient(API_GRAPHQL_ENDPOINT));
export * from './codegen/graphql-request';
