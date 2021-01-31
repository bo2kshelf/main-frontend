/* eslint-disable no-process-env */

export const graphqlConfig = {
  tokenKey: process.env.GRAPHQL_COOKIE_TOKEN_KEY!,
  externalEndpoint: process.env.GRAPHQL_API_ENDPOINT!,
};
