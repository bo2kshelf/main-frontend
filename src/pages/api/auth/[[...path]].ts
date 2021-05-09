import {NextApiRequest, NextApiResponse} from 'next';
import supertokens from 'supertokens-node';
import {superTokensNextWrapper} from 'supertokens-node/nextjs';
import {supertokensBackendConfig} from '~/lib/env';

supertokens.init(supertokensBackendConfig);

export default async function superTokens(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await superTokensNextWrapper(
    async (next) => {
      await supertokens.middleware()(req, res, next);
    },
    req,
    res,
  );
  if (!res.writableEnded) {
    res.status(404).send('Not found');
  }
}
