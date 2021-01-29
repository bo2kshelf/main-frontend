import {GraphQLClient} from 'graphql-request';
import {NextApiHandler} from 'next';
import env from '~/lib/env';

export const TOKEN_KEY = 'token';

const client = new GraphQLClient(env.graphqlAPIEndpoint);
const handler: NextApiHandler = async (req, res) => {
  try {
    const authorization = {
      authorization: req.cookies[TOKEN_KEY]
        ? `bearer ${req.cookies[TOKEN_KEY]}`
        : '',
    };

    await client
      .rawRequest(req.body.query, req.body?.variables, {...authorization})
      .then((result) => res.json(result));
  } catch (error) {
    res.status(error.status || 500).json({error: error.message});
  }
};
export default handler;
