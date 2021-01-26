/* eslint-disable @typescript-eslint/naming-convention */
import {GraphQLClient} from 'graphql-request';
import request from 'request';
import {getSdk} from '~/_generated/graphql-request';
import env from './env';

type Token = {
  access_token: string;
  token_type: string;
  expires_in: number;
};
let cached: Token | null = null;

export async function getSSRAccessToken(): Promise<Token> {
  // not production
  if (!env.isProduction) return env.auth0.ssr.dev;

  // production
  if (cached && Math.floor(new Date().getTime() / 1000) < cached.expires_in) {
    return cached;
  } else {
    return new Promise<Token>((resolve, reject) =>
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
        (error, _, body: string) => {
          if (error) reject(error);

          const timestamp = Math.floor(new Date().getTime() / 1000);
          const {access_token, expires_in, token_type} = JSON.parse(body);

          cached = {
            access_token,
            token_type,
            expires_in: timestamp + expires_in,
          };

          resolve(cached);
        },
      ),
    );
  }
}

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
