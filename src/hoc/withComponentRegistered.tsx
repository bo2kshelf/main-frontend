import dynamic from 'next/dynamic';
import React from 'react';
import {useAuth} from '~/hooks/useAuth';

export function withComponentRegistered<P>(Component: React.FC<P>) {
  const WithComponentRegistered = (props: P) => {
    const auth = useAuth();
    if ('currentUser' in auth) return <Component {...props} />;
    return <></>;
  };
  return dynamic(async () => WithComponentRegistered, {ssr: false});
}
