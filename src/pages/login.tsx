import {NextPage} from 'next';
import React from 'react';
import {LoginPage} from '~/templates/server/LoginPage';

export type UrlQuery = Record<string, never>;

export const Page: NextPage = (props) => {
  return <LoginPage />;
};
export default Page;
