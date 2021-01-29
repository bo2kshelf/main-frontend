import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import {graphqlSdk} from '~/lib/graphql-request';
import {UserPage} from '~/templates/server-side/UserPage';

export type UrlQuery = {username: string};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<UrlQuery>) => {
  if (params) {
    return graphqlSdk
      .UserPage({userName: params.username})
      .then((data) => ({props: data}));
  }
  throw new Error('Invalid parameters.');
};

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => <UserPage {...props} />;
export default Page;
