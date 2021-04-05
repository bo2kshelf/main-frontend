import {NextPage} from 'next';
import React from 'react';
import {usePersonalUserPageQuery} from '~/graphql/codegen/apollo';
import {withPageLoggedIn} from '~/lib/withPageLoggedIn';
import {PersonalUserPage, transform} from '~/templates/client/PersonalUserPage';
import {LoadingPage} from '~/templates/common/LoadingPage';

export const Page: NextPage = (props) => {
  const {data, loading, error} = usePersonalUserPageQuery();
  if (data) return <PersonalUserPage {...transform(data)} />;
  if (loading) return <LoadingPage />;
  return <div />;
};
export default withPageLoggedIn(Page);
