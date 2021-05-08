module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    SUPERTOKENS_APP_NAME: process.env.SUPERTOKENS_APP_NAME,
    WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
    API_DOMAIN: process.env.API_DOMAIN,
    API_GRAPHQL_ENDPOINT: process.env.API_GRAPHQL_ENDPOINT,
  },
  images: {
    domains: [process.env.IMAGE_PROXY_HOST],
  },
};
