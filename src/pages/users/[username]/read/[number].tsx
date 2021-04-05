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
  UrlQuery,
} from '~/lib/UserBookPageCommon';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {
  ReadContainer,
  TransformedProps,
  transformRead,
} from '~/templates/server/UserBooksPage';

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllUserReadBooksPage()
    .then(({allUsers: allAccounts}) => getPathsForNumbered(allAccounts));
};

export const getStaticProps: GetStaticProps<
  TransformedProps<'read'>,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  const number = Number.parseInt(params.number, 10);
  return graphqlSdk
    .UserReadBooksPage(getParams(params.username, number))
    .then((data) => ({
      props: transformRead(data, {number}),
      revalidate: 60,
    }))
    .catch(() => ({notFound: true}));
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const router = useRouter();
  if (router.isFallback) return <LoadingPage />;
  return <ReadContainer {...props} />;
};
export default Page;
