/* eslint-disable @typescript-eslint/naming-convention */
import {GraphQLClient} from 'graphql-request';
import request from 'request';
import {getSdk} from '~/_generated/graphql-request';
import env from './env';

export const getSSRAccessToken = () =>
  new Promise<{
    access_token: string;
    token_type: string;
  }>((resolve, reject) =>
    request.post(
      {
        url: `${env.auth0.issuer}/oauth/token`,
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          client_id: env.auth0.ssr.clientId,
          client_secret: env.auth0.ssr.clientSecret,
          audience: env.auth0.audience,
          grant_type: 'client_credentials',
        }),
      },
      (error, _, body: string) =>
        error ? reject(error) : resolve(JSON.parse(body)),
    ),
  );

export const createClient = () =>
  getSSRAccessToken().then(
    ({token_type, access_token}) =>
      new GraphQLClient(env.graphqlAPIEndpoint, {
        headers: {authorization: `${token_type} ${access_token}`},
      }),
  );

export const createSdk = async () => {
  const client = await createClient();
  return getSdk(client);
};
