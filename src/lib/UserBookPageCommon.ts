import {
  UserHaveBooksPageQuery,
  UserReadBooksPageQuery,
  UserReadingBooksPageQuery,
  UserStackedBooksPageQuery,
  UserWishReadBooksPageQuery,
} from '~/graphql/codegen/graphql-request';

export const RECORDS_PER_PAGE = 12 * 3;

export type UrlQuery = {
  username: string;
  number: string;
};

export const getPathsForIndex = (result: {userName: string}[]) => ({
  paths: result.map(({userName}) => ({params: {username: userName}})),
  fallback: false,
});

export const getPathsForNumbered = (
  result: {userName: string; books: {count: number}}[],
) => ({
  paths: result
    .map(({userName, books}) =>
      Array.from({
        length: Math.ceil(books.count / RECORDS_PER_PAGE),
      }).map((_, i) => ({
        params: {
          username: userName,
          number: `${i + 1}`,
        },
      })),
    )
    .flat(),
  fallback: false,
});

export const getParams = (userName: string, number: number) => ({
  userName,
  limit: RECORDS_PER_PAGE,
  skip: RECORDS_PER_PAGE * (number - 1),
});

export const transformData = <
  T extends
    | UserHaveBooksPageQuery
    | UserReadBooksPageQuery
    | UserReadingBooksPageQuery
    | UserWishReadBooksPageQuery
    | UserStackedBooksPageQuery
>(
  data: T,
) => ({
  props: data,
  revalidate: 60,
});
