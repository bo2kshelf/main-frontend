import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {useCurrentUser} from '~/lib/useCurrentUser';
import {LoginPage} from '~/templates/LoginPage';

export type UrlQuery = Record<string, never>;

export const Page: NextPage = (props) => {
  const router = useRouter();
  const {currentUser} = useCurrentUser();

  if (currentUser) router.push('/me');
  return <LoginPage />;
};
export default Page;
