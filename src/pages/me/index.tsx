import {NextPage} from 'next';
import React from 'react';
import {usePersonalUserPageQuery} from '~/graphql/api-authenticated/codegen/apollo';
import {withPageLoggedIn} from '~/lib/withPageLoggedIn';
import {LoadingPage} from '~/templates/LoadingPage';
import {PersonalUserPage, transform} from '~/templates/PersonalUserPage';

export const Page: NextPage = (props) => {
  const {data, loading, error} = usePersonalUserPageQuery();
  if (data) return <PersonalUserPage {...transform(data)} />;
  if (loading) return <LoadingPage />;
  return <div />;
};
export default withPageLoggedIn(Page);
