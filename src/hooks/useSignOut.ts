import {useRouter} from 'next/router';
import {useSetRecoilState} from 'recoil';
import {signOut} from 'supertokens-auth-react/recipe/thirdparty';
import {stateCurrentUser} from '~/states/CurrentUser';

export const useSignOut = (): (() => Promise<void>) => {
  const router = useRouter();
  const setCurrentUser = useSetRecoilState(stateCurrentUser);

  return async () => {
    await signOut();

    // eslint-disable-next-line unicorn/no-useless-undefined
    setCurrentUser(undefined);

    router.push('/');
    router.reload();
  };
};
