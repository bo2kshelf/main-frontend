import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {graphqlSdk} from '~/lib/graphql-request';
import {currentUserState} from '~/state/CurrentUser';

export function AppInit() {
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(
    () => {
      (async () => {
        try {
          const {currentUser} = await graphqlSdk.GetCurrentUser();
          setCurrentUser(
            currentUser && {
              ...currentUser,
              profile: currentUser.profile || null,
            },
          );
        } catch {
          setCurrentUser(null);
        }
      })();
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return null;
}
