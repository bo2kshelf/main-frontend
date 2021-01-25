import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {createSdk} from '~/lib/GraphQLRequest';
import {LoadingPage} from '~/templates/common/LoadingPage';
import {BookPage, BookPageProps} from '~/templates/server-side/BookPage';

export type UrlQuery = {id: string};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  const gqlsdk = await createSdk();
  return gqlsdk
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

  const gqlsdk = await createSdk();
  return gqlsdk
    .BookPage({id: params.id})
    .then((data) => ({
      props: data,
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
