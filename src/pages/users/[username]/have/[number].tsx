import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {
  getParams,
  getPathsForNumbered,
  transformData,
  UrlQuery,
} from '~/lib/UserBookPageCommon';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {
  UserHaveBooksPage,
  UserHaveBooksPageProps,
} from '~/templates/server/UserBooksPage';

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllUserHaveBooksPage()
    .then(({allUsers: allAccounts}) => getPathsForNumbered(allAccounts));
};

export const getStaticProps: GetStaticProps<
  UserHaveBooksPageProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  return graphqlSdk
    .UserHaveBooksPage(
      getParams(params.username, Number.parseInt(params.number, 10)),
    )
    .then(transformData)
    .catch(() => ({notFound: true}));
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const router = useRouter();
  if (router.isFallback) return <LoadingPage />;
  return <UserHaveBooksPage {...props} />;
};
export default Page;
