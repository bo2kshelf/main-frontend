import {useRecoilValue} from 'recoil';
import {currentUserLoadingState, currentUserState} from '~/states/CurrentUser';

export function useCurrentUser() {
  const currentUser = useRecoilValue(currentUserState);
  const isLoading = useRecoilValue(currentUserLoadingState);

  return {
    currentUser,
    isLoading,
  };
}
