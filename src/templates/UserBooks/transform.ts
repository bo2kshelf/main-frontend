import {
  UserHaveBooksPageQuery,
  UserReadBooksPageQuery,
  UserReadingBooksPageQuery,
  UserStackedBooksPageQuery,
  UserWishReadBooksPageQuery,
} from '~/graphql/api-public/codegen/graphql-request';
import {avoidUndefined} from '~/lib/utils';
import {countPages} from './transform-pages';

export type TransformedProps = {
  userName: string;
  displayName: string;
  picture: string;
  // prim
  books: {id: string; title: string; cover?: string}[];
  booksCount: number;
  // page
  pageNumber: number;
  pagesCount: number;
  skip: number;
  limit: number;
  // meta
  readingBooks: {count: number};
  likedBooks: {count: number};
  records: {count: number};
  readBooks: {count: number};
  haveBooks: {count: number};
  stackedBooks: {count: number};
  wishBooks: {count: number};
};

export const transformHaveBooks: (
  result: UserHaveBooksPageQuery,
  query: {pageNumber: number; skip: number; limit: number},
) => TransformedProps = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks,
      readingBooks,
      wishBooks,
      haveBooks: {count, nodes},
      stackedBooks,
    },
  },
  {pageNumber = 1, skip, limit},
): TransformedProps =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: nodes.map(({book}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber,
    pagesCount: countPages(count),
    skip,
    limit,
    records,
    readBooks,
    readingBooks,
    wishBooks,
    haveBooks: {count},
    stackedBooks,
    likedBooks: {count: 0},
  });

export const transformReadBooks: (
  result: UserReadBooksPageQuery,
  query: {pageNumber: number; skip: number; limit: number},
) => TransformedProps = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks: {count, nodes},
      readingBooks,
      wishBooks,
      haveBooks,
      stackedBooks,
    },
  },
  {pageNumber = 1, skip, limit},
): TransformedProps =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: nodes.map(({book}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber,
    pagesCount: countPages(count),
    skip,
    limit,
    records,
    readBooks: {count},
    readingBooks,
    wishBooks,
    haveBooks,
    stackedBooks,
    likedBooks: {count: 0},
  });

export const transformReadingBooks: (
  result: UserReadingBooksPageQuery,
  query: {pageNumber: number; skip: number; limit: number},
) => TransformedProps = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks,
      readingBooks: {count, nodes},
      wishBooks,
      haveBooks,
      stackedBooks,
    },
  },
  {pageNumber = 1, skip, limit},
): TransformedProps =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: nodes.map(({book}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber,
    pagesCount: countPages(count),
    skip,
    limit,
    records,
    readBooks,
    readingBooks: {count},
    wishBooks,
    haveBooks,
    stackedBooks,
    likedBooks: {count: 0},
  });

export const transformStackedBooks: (
  result: UserStackedBooksPageQuery,
  query: {pageNumber: number; skip: number; limit: number},
) => TransformedProps = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks,
      readingBooks,
      wishBooks,
      haveBooks,
      stackedBooks: {count, nodes},
    },
  },
  {pageNumber = 1, skip, limit},
): TransformedProps =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: nodes.map(({book}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber,
    pagesCount: countPages(count),
    skip,
    limit,
    records,
    readBooks,
    readingBooks,
    wishBooks,
    haveBooks,
    stackedBooks: {count},
    likedBooks: {count: 0},
  });

export const transformWishReadBooks: (
  result: UserWishReadBooksPageQuery,
  query: {pageNumber: number; skip: number; limit: number},
) => TransformedProps = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks,
      readingBooks,
      wishBooks: {count, nodes},
      haveBooks,
      stackedBooks,
    },
  },
  {pageNumber = 1, skip, limit},
): TransformedProps =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: nodes.map(({book}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber,
    pagesCount: countPages(count),
    skip,
    limit,
    records,
    readBooks,
    readingBooks,
    wishBooks: {count},
    haveBooks,
    stackedBooks,
    likedBooks: {count: 0},
  });
