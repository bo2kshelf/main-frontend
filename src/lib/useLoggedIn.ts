import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useCurrentUser} from './useCurrentUser';

export function useLoggedIn() {
  const {isLoading, isAuthenticated, isSignedUp} = useCurrentUser();
  const router = useRouter();

  useEffect(
    () => {
      if (!isLoading && !isAuthenticated) router.push('/login');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, isAuthenticated, isSignedUp],
  );

  return {isLoading};
}
