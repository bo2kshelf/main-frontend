import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {graphqlSdk} from '~/graphql/api-public/graphql-request';
import {LoadingPage} from '~/templates/Loading';
import {
  getPathsForNumbered,
  getVariablesForCursor,
  TemplateReadingBooks,
  transformCursorToPageVariables,
  TransformedProps,
  transformReadingBooks,
  UrlQueryForNumberedPage,
} from '~/templates/UserBooks';

export type UrlQuery = UrlQueryForNumberedPage;

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk.AllUserHaveBooksPage().then(getPathsForNumbered);
};

export const getStaticProps: GetStaticProps<
  TransformedProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  return graphqlSdk
    .UserReadingBooksPageEndCursor(getVariablesForCursor(params))
    .then((data) => transformCursorToPageVariables(data, params))
    .then((variables) => graphqlSdk.UserReadingBooksPage(variables))
    .then((data) => ({
      props: transformReadingBooks(data, params),
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
