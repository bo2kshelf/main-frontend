module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    SUPERTOKENS_APP_NAME: process.env.SUPERTOKENS_APP_NAME,
    WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
    API_DOMAIN: process.env.API_DOMAIN,

    SESSION_NAME: process.env.SESSION_NAME,
    AUTH_SERVER_ENDPOINT: process.env.AUTH_SERVER_ENDPOINT,
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,
    GRAPHQL_API_SERVER_ACCESS_TOKEN:
      process.env.GRAPHQL_API_SERVER_ACCESS_TOKEN,
  },
  images: {
    domains: [process.env.IMAGE_PROXY_HOST, 'localhost'],
  },
};
