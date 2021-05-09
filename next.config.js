module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    WEBSITE_DOMAIN: process.env.WEBSITE_DOMAIN,
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,

    SUPERTOKENS_APP_NAME: process.env.SUPERTOKENS_APP_NAME,
    SUPERTOKENS_CONNECTION_URI: process.env.SUPERTOKENS_CONNECTION_URI,
  },
  images: {
    domains: [process.env.IMAGEPROXY_HOST],
  },
};
