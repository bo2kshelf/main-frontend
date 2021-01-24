import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import {createSdk} from '~/lib/GraphQLRequest';
import {BookPage} from '~/templates/server-side/BookPage';

export type UrlQuery = {id: string};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<UrlQuery>) => {
  if (params) {
    const gqlsdk = await createSdk();

    return gqlsdk.BookPage({id: params.id}).then((data) => ({props: data}));
  }
  throw new Error('Invalid parameters.');
};

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => <BookPage {...props} />;
export default Page;
