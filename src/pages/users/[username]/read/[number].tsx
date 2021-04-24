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
  getVariables,
  TemplateReadBooks,
  TransformedProps,
  transformReadBooks,
  UrlQueryForNumberedPage,
} from '~/templates/UserBooks';

export type UrlQuery = UrlQueryForNumberedPage;
export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk.AllUserReadBooksPage().then(getPathsForNumbered);
};

export const getStaticProps: GetStaticProps<
  TransformedProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  const variables = getVariables(params);
  return graphqlSdk
    .UserReadBooksPage(variables)
    .then((data) => ({
      props: transformReadBooks(data, variables),
      revalidate: 60,
    }))
    .catch(() => ({notFound: true}));
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const router = useRouter();
  if (router.isFallback) return <LoadingPage />;
  return <TemplateReadBooks {...props} />;
};
export default Page;
