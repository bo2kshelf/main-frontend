import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import {createSdk} from '~/lib/GraphQLRequest';
import {UserPage} from '~/templates/UserPage';

export type UrlQuery = {username: string};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<UrlQuery>) => {
  if (params) {
    const gqlsdk = await createSdk();

    return gqlsdk
      .UserPage({userName: params.username})
      .then((data) => ({props: data}));
  }
  throw new Error('Invalid parameters.');
};

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => <UserPage {...props} />;
export default Page;
