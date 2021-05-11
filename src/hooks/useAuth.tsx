import {useEffect} from 'react';
import {useEffectOnce} from 'react-use';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useSessionContext} from 'supertokens-auth-react/recipe/session';
import {useGetCurrentUserLazyQuery} from '~/graphql/apollo';
import {
  CurrentUser,
  stateCurrentUser,
  stateCurrentUserRegistered,
} from '~/states/CurrentUser';

export type AuthState =
  | {
      signedIn: false;
    }
  | {
      signedIn: true;
      loading: true;
    }
  | {
      signedIn: true;
      loading: false;
      registered: false;
    }
  | {
      signedIn: true;
      loading: false;
      registered: true;
      currentUser: CurrentUser;
    };

export const useAuth = (): AuthState => {
  const {doesSessionExist: signedIn} = useSessionContext();
  const [loadCurrentUser, {data, loading}] = useGetCurrentUserLazyQuery();

  const currentUser = useRecoilValue(stateCurrentUser);
  const setCurrentUser = useSetRecoilState(stateCurrentUser);

  const registered = useRecoilValue(stateCurrentUserRegistered);
  const setRegistered = useSetRecoilState(stateCurrentUserRegistered);

  useEffectOnce(() => {
    if (!currentUser && signedIn) loadCurrentUser();
  });

  useEffect(() => {
    if (data?.currentUser && !data.currentUser.initialized) {
      setRegistered(false);
    } else if (data?.currentUser && data.currentUser.initialized) {
      setRegistered(true);
      setCurrentUser({
        userName: data.currentUser.userName,
        displayName: data.currentUser.displayName,
        picture: data.currentUser.picture,
      });
    }
  }, [data, setCurrentUser, setRegistered]);

  if (signedIn && !loading && registered && currentUser)
    return {
      signedIn: true,
      loading: false,
      registered,
      currentUser,
    };
  if (signedIn && !loading && !registered)
    return {
      signedIn: true,
      loading: false,
      registered: false,
    };
  if (signedIn && loading)
    return {
      signedIn: true,
      loading: true,
    };
  return {
    signedIn: false,
  };
};
