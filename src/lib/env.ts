/* eslint-disable no-process-env */

export const SESSION_NAME = process.env.SESSION_NAME!;

export const PUBLIC_API_ENDPOINT = process.env.PUBLIC_API_ENDPOINT!;
export const PUBLIC_API_ACCESS_TOKEN = process.env.PUBLIC_API_ACCESS_TOKEN!;

export const AUTHENTICATED_API_ENDPOINT = process.env
  .AUTHENTICATED_API_ENDPOINT!;

export const AUTH_SERVER_ENDPOINT = process.env.AUTH_SERVER_ENDPOINT!;
export const AUTH_SERVER_TOKEN_ENDPOINT = new URL(
  '/token',
  AUTH_SERVER_ENDPOINT,
).toString();
export const AUTH_SERVER_LOGIN_ENDPOINT = new URL(
  '/login',
  AUTH_SERVER_ENDPOINT,
).toString();
