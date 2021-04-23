import {Merge} from 'type-fest';

export const RECORDS_PER_PAGE = 8 * 4;

export type UrlQueryForIndexPage = {
  username: string;
};

export type UrlQueryForNumberedPage = Merge<
  UrlQueryForIndexPage,
  {number: string}
>;

export const getPathsForIndex = (result: {allUsers: {userName: string}[]}) => ({
  paths: result.allUsers.map(({userName}) => ({params: {username: userName}})),
  fallback: false,
});

export const getPathsForNumbered = (result: {
  allUsers: {userName: string; books: {count: number}}[];
}) => ({
  paths: result.allUsers
    .map(({userName, books}) =>
      Array.from({
        length: Math.ceil(books.count / RECORDS_PER_PAGE),
      }).map((_, i) => ({
        params: {username: userName, number: `${i + 1}`},
      })),
    )
    .flat(),
  fallback: false,
});

export const getVariables = ({username, number}: UrlQueryForNumberedPage) => {
  const pageNumber = Number.parseInt(number, 10);
  return {
    userName: username,
    pageNumber,
    limit: RECORDS_PER_PAGE,
    skip: RECORDS_PER_PAGE * (pageNumber - 1),
  };
};
