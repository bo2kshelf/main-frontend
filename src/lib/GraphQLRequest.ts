import {GraphQLClient} from 'graphql-request';
import {graphqlConfig} from '~/lib/env';
import {getSdk} from '~/_generated/graphql-request';

export const localClient = new GraphQLClient(graphqlConfig.internalEndpoint);

export const graphqlSdk = getSdk(localClient);
