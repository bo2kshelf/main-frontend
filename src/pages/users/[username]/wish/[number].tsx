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
  getPaths,
  transformData,
  UrlQuery,
} from '~/lib/UserBookPageCommon';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {
  UserWishReadBooksPage,
  UserWishReadBooksPageProps,
} from '~/templates/server/UserBooksPage';

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllUserWishReadBooksPage()
    .then(({allAccounts}) => getPaths(allAccounts));
};

export const getStaticProps: GetStaticProps<
  UserWishReadBooksPageProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  return graphqlSdk
    .UserWishReadBooksPage(
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
  return <UserWishReadBooksPage {...props} />;
};
export default Page;
