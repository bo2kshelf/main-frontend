import {getAccessToken, withApiAuthRequired} from '@auth0/nextjs-auth0';
import {GraphQLClient} from 'graphql-request';
import config from '~/lib/config';

const client = new GraphQLClient(config.graphqlAPIEndpoint);

export default withApiAuthRequired(async (req, res) => {
  try {
    const {accessToken} = await getAccessToken(req, res, {
      scopes: ['read:users', 'create:users', 'update:users', 'delete:users'],
    });
    await client
      .rawRequest(req.body.query, req.body?.variables, {
        authorization: `Bearer ${accessToken}`,
      })
      .then((result) => res.json(result));
  } catch (error) {
    res.status(error.status || 500).json({error: error.message});
  }
});
