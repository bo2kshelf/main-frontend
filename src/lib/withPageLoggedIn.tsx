import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {useCurrentUser} from './useCurrentUser';

export function withPageLoggedIn(
  PageComponent: NextPage,
  LoadingPageComponent: React.FC = LoadingPage,
) {
  const WithPageLoggedIn = () => {
    const {currentUser, isLoading} = useCurrentUser();
    const router = useRouter();

    if (currentUser) return <PageComponent />;
    if (isLoading) return <LoadingPageComponent />;
    router.push('/login');
  };

  return WithPageLoggedIn;
}
