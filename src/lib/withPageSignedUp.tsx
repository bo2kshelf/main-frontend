import {NextPage} from 'next';
import React from 'react';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {useSignedUp} from './useSignedUp';

export function withPageSignedUp(
  PageComponent: NextPage,
  LoadingPageComponent: React.FC = LoadingPage,
) {
  const WithPageSignedUp = () => {
    const {isLoading} = useSignedUp();

    if (isLoading) return <LoadingPageComponent />;
    return <PageComponent />;
  };

  return WithPageSignedUp;
}
