import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {BookPage, BookPageProps, transform} from '~/templates/server/BookPage';

export type UrlQuery = {id: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllBookPages()
    .then(({allBooks}) => allBooks.map(({id}) => ({params: {id}})))
    .then((paths) => ({
      paths,
      fallback: true,
    }));
};

export const getStaticProps: GetStaticProps<BookPageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params) throw new Error('Invalid parameters.');

  return graphqlSdk
    .BookPage({id: params.id})
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

  return <BookPage {...props} />;
};
export default Page;
