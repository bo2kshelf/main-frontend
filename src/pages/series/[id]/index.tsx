import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {graphqlSdk} from '~/graphql/graphql-request';
import {LoadingPage} from '~/templates/Loading';
import {SeriesPage, SeriesPageProps, transform} from '~/templates/Series';

export type UrlQuery = {id: string};
export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllSeriesPages()
    .then(({allSeries}) => allSeries.map(({id}) => ({params: {id}})))
    .then((paths) => ({
      paths,
      fallback: true,
    }));
};

export const getStaticProps: GetStaticProps<
  SeriesPageProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  return graphqlSdk
    .SeriesPage({id: params.id})
    .then((data) => ({
      props: transform(data),
      revalidate: 60 * 60,
    }))
    .catch(() => ({notFound: true}));
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  ...props
}) => {
  const router = useRouter();
  if (router.isFallback) return <LoadingPage />;
  return <SeriesPage {...props} />;
};
export default Page;
