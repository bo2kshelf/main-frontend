import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {currentUserState} from '~/states/CurrentUser';

export function AppInit() {
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(
    () => {
      (async () => {
        await graphqlSdk
          .GetCurrentUser()
          .then(({currentUser}) =>
            setCurrentUser(
              currentUser && {
                ...currentUser,
                profile: currentUser.account || null,
              },
            ),
          )
          .catch((error) => {
            setCurrentUser(null);
          });
      })();
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return null;
}
