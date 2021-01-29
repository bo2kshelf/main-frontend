import {GraphQLClient} from 'graphql-request';
import {getSdk} from '~/_generated/graphql-request';

const client = new GraphQLClient('/api/graphql');

export const graphqlSdk = getSdk(client);
