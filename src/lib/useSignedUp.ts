import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {useCurrentUser} from './useCurrentUser';
import {useLoggedIn} from './useLoggedIn';

export function useSignedUp() {
  useLoggedIn();

  const {isLoading, isAuthenticated, isSignedUp} = useCurrentUser();
  const router = useRouter();

  useEffect(
    () => {
      if (!isLoading && !isSignedUp) router.push('/signup');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, isAuthenticated, isSignedUp],
  );

  return {isLoading};
}
