import {NextPage} from 'next';
import React from 'react';
import {useCurrentUserPageQuery} from '~/graphql/api-authenticated/codegen/apollo';
import {withPageLoggedIn} from '~/lib/withPageLoggedIn';
import {LoadingPage} from '~/templates/Loading';
import {PersonalUserPage, transform} from '~/templates/PersonalUser';

export const Page: NextPage = (props) => {
  const {data, loading, error} = useCurrentUserPageQuery();
  if (data)
    return (
      <PersonalUserPage {...transform(data, {recordLimit: 5, recordSkip: 0})} />
    );
  if (loading) return <LoadingPage />;
  return <div />;
};
export default withPageLoggedIn(Page);
