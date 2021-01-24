import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import React from 'react';
import {createSdk} from '~/lib/GraphQLRequest';
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
  if (params) {
    const gqlsdk = await createSdk();
    return gqlsdk.BookPage({id: params.id}).then((data) => ({props: data}));
  } else throw new Error('Invalid parameters.');
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => <BookPage {...props} />;
export default Page;
