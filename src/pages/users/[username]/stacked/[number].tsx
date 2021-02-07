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
import {
  UserStackedBooksPage,
  UserStackedBooksPageProps,
} from '~/templates/server/UserStackedBooksPage';

export const RECORDS_PER_PAGE = 60;

export type UrlQuery = {
  username: string;
  number: string;
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk
    .AllUserStackedBooksPage()
    .then(({allAccounts}) =>
      allAccounts
        .map(({userName, stackedBooks}) =>
          Array.from({
            length: Math.ceil(stackedBooks.count / RECORDS_PER_PAGE),
          }).map((_, i) => ({
            params: {username: userName, number: `${i + 1}`},
          })),
        )
        .flat(),
    )
    .then((paths) => ({
      paths,
      fallback: true,
    }));
};

export const getStaticProps: GetStaticProps<
  UserStackedBooksPageProps,
  UrlQuery
> = async ({params}) => {
  if (!params) throw new Error('Invalid parameters.');

  const limit = RECORDS_PER_PAGE;
  const skip = limit * (Number.parseInt(params.number, 10) - 1);
  return graphqlSdk
    .UserStackedBooksPage({userName: params.username, limit, skip})
    .then((data) => ({
      props: data,
      revalidate: 60,
    }))
    .catch(() => ({notFound: true}));
};

export const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const router = useRouter();
  if (router.isFallback) return <LoadingPage />;
  return <UserStackedBooksPage {...props} />;
};
export default Page;