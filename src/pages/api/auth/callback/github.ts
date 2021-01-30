/* eslint-disable import/no-anonymous-default-export */

import {serialize} from 'cookie';
import {NextApiRequest, NextApiResponse} from 'next';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {TOKEN_KEY} from '../../graphql';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.code && typeof req.query.code === 'string') {
    const {loginGitHub} = await graphqlSdk.LoginGitHub({
      code: req.query.code,
    });

    res.setHeader(
      'Set-Cookie',
      serialize(TOKEN_KEY, loginGitHub.accessToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 3600,
      }),
    );

    if (loginGitHub.user.profile) res.redirect('/');
    else res.redirect('/signup');
  } else {
    res.redirect('/');
  }
};
