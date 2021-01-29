import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import React from 'react';
import {graphqlSdk} from '~/lib/graphql-request';
import {BookPage, BookPageProps} from '~/templates/server-side/BookPage';

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
  if (params) {
    return graphqlSdk.BookPage({id: params.id}).then((data) => ({props: data}));
  } else throw new Error('Invalid parameters.');
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => <BookPage {...props} />;
export default Page;
