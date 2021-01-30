/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-process-env */

export const graphqlConfig = {
  internalEndpoint: 'http://localhost:3000/api/graphql',
  externalEndpoint: process.env.GRAPHQL_API_ENDPOINT!,
};
