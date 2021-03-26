module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    SESSION_STORAGE_API_TOKEN_KEY: 'bo2kshelf_api_token',
    AUTH_SERVER_ENDPOINT: process.env.AUTH_SERVER_ENDPOINT,
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,
    GRAPHQL_API_SERVER_ACCESS_TOKEN:
      process.env.GRAPHQL_API_SERVER_ACCESS_TOKEN,
  },
  images: {
    domains: [process.env.IMAGE_PROXY_HOST],
  },
};
