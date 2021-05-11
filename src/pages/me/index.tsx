import {NextPage} from 'next';
import React from 'react';
import {useCurrentUserPageQuery} from '~/graphql/codegen/apollo';
import {withPageAuthenticated} from '~/hoc/withPageAuthenticated';
import {withPageRegistered} from '~/hoc/withPageRegistered';
import {LoadingPage} from '~/templates/Loading';
import {PersonalUserPage, transform} from '~/templates/PersonalUser';

export const Page: NextPage = () => {
  const {data, loading, error} = useCurrentUserPageQuery();

  if (data)
    return (
      <PersonalUserPage {...transform(data, {recordLimit: 5, recordSkip: 0})} />
    );
  if (loading) return <LoadingPage />;
  return <div />;
};

export default withPageAuthenticated(withPageRegistered(Page));
