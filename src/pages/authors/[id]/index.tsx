import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {graphqlSdk} from '~/graphql/graphql-request';
import {AuthorPage, AuthorPageProps, transform} from '~/templates/Author';
import {LoadingPage} from '~/templates/Loading';

export type UrlQuery = {id: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllAuthorPages()
    .then(({allAuthors}) => allAuthors.map(({id}) => ({params: {id}})))
    .then((paths) => ({paths, fallback: true}));
};

export const getStaticProps: GetStaticProps<
  AuthorPageProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  return graphqlSdk
    .AuthorPage({id: params.id})
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

  return <AuthorPage {...props} />;
};
export default Page;
