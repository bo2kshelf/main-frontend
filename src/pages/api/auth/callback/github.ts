/* eslint-disable import/no-anonymous-default-export */

import {serialize} from 'cookie';
import {NextApiRequest, NextApiResponse} from 'next';
import {graphqlConfig} from '~/lib/env';
import {graphqlSdk} from '~/lib/GraphQLRequest';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.code && typeof req.query.code === 'string') {
    const {loginGitHub} = await graphqlSdk.LoginGitHub({
      code: req.query.code,
    });

    res.setHeader(
      'Set-Cookie',
      serialize(graphqlConfig.tokenKey, loginGitHub.accessToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
      }),
    );

    if (loginGitHub.user.account) res.redirect('/');
    else res.redirect('/signup');
  } else {
    res.redirect('/');
  }
};
