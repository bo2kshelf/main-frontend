import {NextPage} from 'next';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import React from 'react';
import {useAuth} from '~/hooks/useAuth';

export function withPageRegistered<P>(Page: NextPage<P>) {
  const WithPageRegistered = (props: P) => {
    const auth = useAuth();
    const router = useRouter();
    if ('registered' in auth && !auth.registered)
      router.push('/settings/profile');
    if ('currentUser' in auth) return <Page {...props} />;
    return <></>;
  };
  return dynamic(async () => WithPageRegistered, {ssr: false});
}
