import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {createSdk} from '~/lib/GraphQLRequest';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {UserPage, UserPageProps} from '~/templates/server-side/UserPage';

export type UrlQuery = {username: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<UserPageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params) throw new Error('Invalid parameters.');

  const gqlsdk = await createSdk();
  return gqlsdk
    .UserPage({userName: params.username})
    .then((data) => ({
      props: data,
      revalidate: 60 * 60,
    }))
    .catch(() => ({notFound: true}));
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const router = useRouter();

  if (router.isFallback) return <LoadingPage />;

  return <UserPage {...props} />;
};
export default Page;
