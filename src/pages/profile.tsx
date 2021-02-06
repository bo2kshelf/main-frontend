import {NextPage} from 'next';
import Error from 'next/error';
import React from 'react';
import {PersonalUserPage} from '~/templates/client/PersonalUserPage';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {usePersonalUserPageQuery} from '~/_generated/apollo';
import {withPageSignedUp} from '../lib/withPageSignedUp';

export const Page: NextPage = (props) => {
  const {loading, data} = usePersonalUserPageQuery();

  if (loading) return <LoadingPage />;
  else if (!data || !data.currentUser.account)
    return <Error statusCode={404} />;

  return (
    <PersonalUserPage
      {...props}
      currentUser={{profile: data.currentUser.account}}
    />
  );
};
export default withPageSignedUp(Page);
