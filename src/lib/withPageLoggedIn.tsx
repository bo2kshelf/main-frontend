import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {LoadingPage} from '~/templates/Loading';
import {useCurrentUser} from './useCurrentUser';

export function withPageLoggedIn(
  PageComponent: NextPage,
  LoadingPageComponent: React.FC = LoadingPage,
) {
  const WithPageLoggedIn = () => {
    const {currentUser, isLoading} = useCurrentUser();
    const router = useRouter();

    if (!isLoading && !currentUser) router.push('/login');
    if (currentUser) return <PageComponent />;
    return <LoadingPageComponent />;
  };

  return WithPageLoggedIn;
}
