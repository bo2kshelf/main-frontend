/* eslint-disable import/no-anonymous-default-export */

import {serialize} from 'cookie';
import {NextApiRequest, NextApiResponse} from 'next';
import {graphqlConfig} from '~/lib/env';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    serialize(graphqlConfig.tokenKey, '', {path: '/', maxAge: -1}),
  );

  res.redirect('/');
  res.end();
};
