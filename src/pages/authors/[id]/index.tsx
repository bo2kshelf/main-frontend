import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import React from 'react';
import {graphqlSdk} from '~/lib/graphql-request';
import {AuthorPage, AuthorPageProps} from '~/templates/server-side/AuthorPage';

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
  if (params) {
    return graphqlSdk
      .AuthorPage({id: params.id})
      .then((data) => ({props: data}));
  } else throw new Error('Invalid parameters.');
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => <AuthorPage {...props} />;
export default Page;
