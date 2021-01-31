import {useRecoilValue} from 'recoil';
import {currentUserState} from '~/states/CurrentUser';

export function useCurrentUser() {
  const currentUser = useRecoilValue(currentUserState);

  const isLoading = currentUser === undefined;
  const isAuthenticated = currentUser !== undefined && currentUser !== null;
  const isSignedUp =
    currentUser !== undefined && currentUser !== null && currentUser.profile;

  return {
    currentUser,
    isLoading,
    isAuthenticated,
    isSignedUp,
  };
}
