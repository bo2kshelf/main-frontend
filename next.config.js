module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    API_GRAPHQL_ENDPOINT: process.env.API_GRAPHQL_ENDPOINT,
    SUPERTOKENS_APP_NAME: process.env.SUPERTOKENS_APP_NAME,
    WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
    API_DOMAIN: process.env.API_DOMAIN,
  },
  images: {
    domains: [process.env.IMAGEPROXY_HOST],
  },
};
