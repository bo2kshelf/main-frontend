import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {graphqlSdk} from '~/graphql/api-public/graphql-request';
import {LoadingPage} from '~/templates/LoadingPage';
import {
  getPathsForNumbered,
  getVariables,
  TemplateReadingBooks,
  TransformedProps,
  transformReadingBooks,
  UrlQueryForNumberedPage,
} from '~/templates/UserBooksPage';

export type UrlQuery = UrlQueryForNumberedPage;

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk.AllUserHaveBooksPage().then(getPathsForNumbered);
};

export const getStaticProps: GetStaticProps<
  TransformedProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  const variables = getVariables(params);
  return graphqlSdk
    .UserReadingBooksPage(variables)
    .then((data) => ({
      props: transformReadingBooks(data, variables),
      revalidate: 60,
    }))
    .catch(() => ({notFound: true}));
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const router = useRouter();
  if (router.isFallback) return <LoadingPage />;
  return <TemplateReadingBooks {...props} />;
};
export default Page;
