/* eslint-disable no-process-env */

export const GRAPHQL_API_ENDPOINT = process.env.GRAPHQL_API_ENDPOINT!;
export const GRAPHQL_API_SERVER_ACCESS_TOKEN = process.env
  .GRAPHQL_API_SERVER_ACCESS_TOKEN!;

export const AUTH_SERVER_ENDPOINT = process.env.AUTH_SERVER_ENDPOINT!;
export const AUTH_SERVER_TOKEN_ENDPOINT = new URL(
  '/token',
  AUTH_SERVER_ENDPOINT,
).toString();
export const AUTH_SERVER_LOGIN_ENDPOINT = new URL(
  '/login',
  AUTH_SERVER_ENDPOINT,
).toString();

export const SESSION_STORAGE_API_TOKEN_KEY = process.env
  .SESSION_STORAGE_API_TOKEN_KEY!;

export const SESSION_NAME = process.env.SESSION_NAME!;
