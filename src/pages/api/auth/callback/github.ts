/* eslint-disable import/no-anonymous-default-export */

import {serialize} from 'cookie';
import {GraphQLClient} from 'graphql-request';
import {NextApiRequest, NextApiResponse} from 'next';
import env from '~/lib/env';
import {getSdk} from '~/_generated/graphql-request';
import {TOKEN_KEY} from '../../graphql';

const client = new GraphQLClient(env.graphqlAPIEndpoint);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.code && typeof req.query.code === 'string') {
    const {loginGitHub} = await getSdk(client).LoginGitHub({
      code: req.query.code,
    });

    res.setHeader(
      'Set-Cookie',
      serialize(TOKEN_KEY, loginGitHub.accessToken, {
        path: '/',
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
