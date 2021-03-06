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
  TemplateRecord,
  TemplateRecordProps,
  transform,
} from '~/templates/Record';

export type UrlQuery = {id: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllRecordPages()
    .then(({allRecords}) => allRecords.map(({id}) => ({params: {id}})))
    .then((paths) => ({
      paths,
      fallback: true,
    }));
};

export const getStaticProps: GetStaticProps<
  TemplateRecordProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  return graphqlSdk
    .RecordPage({id: params.id})
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

  return <TemplateRecord {...props} />;
};
export default Page;
