import {NextPage} from 'next';
import Error from 'next/error';
import {useRouter} from 'next/router';
import React from 'react';
import {withPageLoggedIn} from '~/lib/withPageLoggedIn';
import {SignUpPage} from '~/templates/client/SignUpPage';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {useSignUpPageQuery} from '~/_generated/apollo';

export const Page: NextPage = (props) => {
  const {loading, data} = useSignUpPageQuery();
  const router = useRouter();

  if (loading) return <LoadingPage />;
  else if (!data || !data.currentUser.id) return <Error statusCode={500} />;

  if (data.currentUser.account) {
    router.replace('/');
    return <LoadingPage />;
  }
  return (
    <SignUpPage
      {...props}
      currentUser={{
        id: data.currentUser.id,
        github: data.currentUser.github || null,
      }}
    />
  );
};
export default withPageLoggedIn(Page);
