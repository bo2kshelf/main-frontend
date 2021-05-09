import {GraphQLClient} from 'graphql-request';
import {GRAPHQL_API_ENDPOINT} from '~/configs/api';
import {getSdk} from '~/graphql/codegen/graphql-request';

export const graphqlSdk = getSdk(new GraphQLClient(GRAPHQL_API_ENDPOINT));
export * from './codegen/graphql-request';
