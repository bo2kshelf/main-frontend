/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-process-env */

const config = {
  isProduction: process.env.NODE_ENV === 'production',
  auth0: {
    domain: process.env.AUTH0_BASE_URL!,
    clientId: process.env.AUTH0_CLIENT_ID!,
    audience: process.env.AUTH0_AUDIENCE!,
    issuer: process.env.AUTH0_ISSUER_BASE_URL!,
    ssr: {
      clientId: process.env.AUTH0_SSR_CLIENT_ID!,
      clientSecret: process.env.AUTH0_SSR_CLIENT_SECRET!,
      dev: {
        access_token: process.env.AUTH0_SSR_DEV_ACCESS_TOKEN!,
        token_type: 'Bearer',
        expires_in: 0,
      },
    },
  },
  graphqlAPIEndpoint: process.env.GRAPHQL_API_ENDPOINT!,
};

export default config;
