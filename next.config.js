module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,
  },
  images: {
    domains: [
      'cover.openbd.jp',
      's.gravatar.com',
      'avatars.githubusercontent.com',
      'thumbnail.image.rakuten.co.jp',
    ],
  },
};
