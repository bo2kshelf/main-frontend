import {
  UserHaveBooksPageQuery,
  UserReadBooksPageQuery,
  UserReadingBooksPageQuery,
  UserStackedBooksPageQuery,
  UserWishReadBooksPageQuery,
} from '~/graphql/api-public/codegen/graphql-request';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  userName: string;
  displayName: string;
  picture: string;
  // prim
  books: {id: string; title: string; cover?: string}[];
  booksCount: number;
  // page
  pageNumber: number;
  skip: number;
  limit: number;
  // meta
  readingBooks: {count: number};
  likedBooks: {count: number};
  records: {count: number};
  readBooks: {count: number};
  haveBooks: {count: number};
  stackedBooks: {count: number};
  wishReadBooks: {count: number};
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
      wishesReadBooks,
      hasBooks: {count, nodes},
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
    skip,
    limit,
    records,
    readBooks,
    readingBooks,
    wishReadBooks: wishesReadBooks,
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
      wishesReadBooks,
      hasBooks,
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
    skip,
    limit,
    records,
    readBooks: {count},
    readingBooks,
    wishReadBooks: wishesReadBooks,
    haveBooks: hasBooks,
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
      wishesReadBooks,
      hasBooks,
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
    skip,
    limit,
    records,
    readBooks,
    readingBooks: {count},
    wishReadBooks: wishesReadBooks,
    haveBooks: hasBooks,
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
      wishesReadBooks,
      hasBooks,
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
    skip,
    limit,
    records,
    readBooks,
    readingBooks,
    wishReadBooks: wishesReadBooks,
    haveBooks: hasBooks,
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
      wishesReadBooks: {count, nodes},
      hasBooks,
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
    skip,
    limit,
    records,
    readBooks,
    readingBooks,
    wishReadBooks: {count},
    haveBooks: hasBooks,
    stackedBooks,
    likedBooks: {count: 0},
  });
