/* eslint-disable import/no-anonymous-default-export */

import {serialize} from 'cookie';
import {NextApiRequest, NextApiResponse} from 'next';
import {TOKEN_KEY} from '../graphql';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    serialize(TOKEN_KEY, '', {path: '/', maxAge: -1}),
  );

  res.redirect('/');
  res.end();
};
