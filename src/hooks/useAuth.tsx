import {useEffect} from 'react';
import {useEffectOnce} from 'react-use';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useSessionContext} from 'supertokens-auth-react/recipe/session';
import {useGetCurrentUserLazyQuery} from '~/graphql/apollo';
import {CurrentUser, currentUserState} from '~/states/CurrentUser';

export type AuthState =
  | {signedIn: false}
  | {signedIn: true; loading: true}
  | {signedIn: true; loading: false; currentUser: CurrentUser};

export const useAuth = (): AuthState => {
  const {doesSessionExist: signedIn} = useSessionContext();
  const [loadCurrentUser, {data}] = useGetCurrentUserLazyQuery();

  const currentUser = useRecoilValue(currentUserState);
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffectOnce(() => {
    if (!currentUser && signedIn) {
      loadCurrentUser();
    }
  });

  useEffect(() => {
    if (data?.currentUser)
      setCurrentUser({
        userName: data.currentUser.userName,
        displayName: data.currentUser.displayName,
        picture: data.currentUser.picture,
      });
  }, [data, setCurrentUser]);

  if (!signedIn) return {signedIn: false};
  if (currentUser) return {signedIn: true, loading: false, currentUser};
  return {
    signedIn: true,
    loading: true,
  };
};
