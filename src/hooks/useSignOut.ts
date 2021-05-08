import {useRouter} from 'next/router';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';

export const useSignOut = () => {
  const router = useRouter();
  return async () => {
    await EmailPassword.signOut();
    router.push('/');
  };
};
