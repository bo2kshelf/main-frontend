import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {transform, UserPage, UserPageProps} from '~/templates/server/UserPage';

export type UrlQuery = {username: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllUserPages()
    .then(({allUsers}) =>
      allUsers.map(({userName}) => ({params: {username: userName}})),
    )
    .then((paths) => ({
      paths,
      fallback: true,
    }));
};

export const getStaticProps: GetStaticProps<UserPageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params) throw new Error('Invalid parameters.');

  return graphqlSdk
    .UserPage({userName: params.username})
    .then((data) => ({
      props: transform(data),
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
