import {NextPage} from 'next';
import React from 'react';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {useLoggedIn} from './useLoggedIn';

export function withPageLoggedIn(
  PageComponent: NextPage,
  LoadingPageComponent: React.FC = LoadingPage,
) {
  const WithPageLoggedIn = () => {
    const {isLoading} = useLoggedIn();

    if (isLoading) return <LoadingPageComponent />;
    return <PageComponent />;
  };

  return WithPageLoggedIn;
}
