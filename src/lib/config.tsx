/* eslint-disable no-process-env */

const config = {
  auth0: {
    domain: process.env.AUTH0_BASE_URL!,
    clientId: process.env.AUTH0_CLIENT_ID!,
    audience: process.env.AUTH0_AUDIENCE!,
  },
  graphqlAPIEndpoint: process.env.GRAPHQL_API_ENDPOINT!,
};

export default config;
