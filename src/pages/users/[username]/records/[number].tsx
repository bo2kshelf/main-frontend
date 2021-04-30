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
  TemplateUserRecords,
  transform,
  TransformedProps,
} from '~/templates/UserRecord';

export type UrlQuery = {username: string; number: string};
export const RECORDS_PER_PAGE = 6;

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk.AllUserRecordsPage().then((result) => ({
    paths: result.allUsers
      .map(({userName, records: {totalCount}}) =>
        Array.from({
          length: Math.ceil(totalCount / RECORDS_PER_PAGE),
        }).map((_, i) => ({
          params: {username: userName, number: `${i + 1}`},
        })),
      )
      .flat(),
    fallback: false,
  }));
};

export const getStaticProps: GetStaticProps<
  TransformedProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  const pageNumber = Number.parseInt(params.number, 10);
  const variables =
    pageNumber === 1
      ? {
          userName: params.username,
          first: RECORDS_PER_PAGE,
        }
      : await graphqlSdk
          .UserRecordsPageEndCursor({
            userName: params.username,
            first: pageNumber * RECORDS_PER_PAGE,
          })
          .then((data) => ({
            userName: params.username,
            first: RECORDS_PER_PAGE,
            after: data.user.books.pageInfo.endCursor,
          }));
  return graphqlSdk
    .UserRecordsPage(variables)
    .then((data) => ({
      props: transform(data, {pageNumber}),
      revalidate: 60,
    }))
    .catch(() => ({notFound: true}));
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const router = useRouter();
  if (router.isFallback) return <LoadingPage />;
  return <TemplateUserRecords {...props} />;
};
export default Page;
