import {useRouter} from 'next/router';
import {useSetRecoilState} from 'recoil';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import {currentUserState} from '~/states/CurrentUser';

export const useSignOut = (): (() => Promise<void>) => {
  const router = useRouter();
  const setCurrentUser = useSetRecoilState(currentUserState);

  return async () => {
    await EmailPassword.signOut();

    // eslint-disable-next-line unicorn/no-useless-undefined
    setCurrentUser(undefined);

    router.push('/');
    router.reload();
  };
};
