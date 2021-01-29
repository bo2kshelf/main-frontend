import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useCurrentUser} from './useCurrentUser';
import {useRequireLogin} from './useRequireLogin';

export function useSignedUp() {
  useRequireLogin();

  const {isLoading, isAuthenticated, isSignedUp} = useCurrentUser();
  const router = useRouter();

  useEffect(
    () => {
      if (!isLoading && !isSignedUp) router.push('/signup');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, isAuthenticated, isSignedUp],
  );
}
