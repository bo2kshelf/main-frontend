import {NextApiRequest, NextApiResponse} from 'next';
import SuperTokensNode from 'supertokens-node';
import {superTokensNextWrapper} from 'supertokens-node/nextjs';
import {supertokensBackendConfig} from '~/configs/supertokens';

SuperTokensNode.init(supertokensBackendConfig);

export default async function superTokens(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await superTokensNextWrapper(
    async (next) => {
      await SuperTokensNode.middleware()(req, res, next);
    },
    req,
    res,
  );
  if (!res.writableEnded) {
    res.status(404).send('Not found');
  }
}
