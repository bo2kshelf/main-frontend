import {
  UserHaveBooksPageQuery,
  UserReadBooksPageQuery,
  UserReadingBooksPageQuery,
  UserStackedBooksPageQuery,
  UserWishBooksPageQuery,
} from '~/graphql/codegen/graphql-request';
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
  // meta
  readingBooks: {count: number};
  likedBooks: {count: number};
  records: {count: number};
  readBooks: {count: number};
  haveBooks: {count: number};
  stackedBooks: {count: number};
  wishBooks: {count: number};
};

export type Transformer<
  T extends
    | UserHaveBooksPageQuery
    | UserReadBooksPageQuery
    | UserReadingBooksPageQuery
    | UserStackedBooksPageQuery
    | UserWishBooksPageQuery
> = (result: T, params: {number: string}) => TransformedProps;

export const transformHaveBooks: Transformer<UserHaveBooksPageQuery> = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks,
      readingBooks,
      wishBooks,
      haveBooks: {count, edges},
      stackedBooks,
    },
  },
  {number: pageNumber},
) =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: edges.map(({node: {book}}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber: Number.parseInt(pageNumber, 10),
    pagesCount: countPages(count),
    records,
    readBooks,
    readingBooks,
    wishBooks,
    haveBooks: {count},
    stackedBooks,
    likedBooks: {count: 0},
  });

export const transformReadBooks: Transformer<UserReadBooksPageQuery> = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks: {count, edges},
      readingBooks,
      wishBooks,
      haveBooks,
      stackedBooks,
    },
  },
  {number: pageNumber},
) =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: edges.map(({node: {book}}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber: Number.parseInt(pageNumber, 10),
    pagesCount: countPages(count),
    records,
    readBooks: {count},
    readingBooks,
    wishBooks,
    haveBooks,
    stackedBooks,
    likedBooks: {count: 0},
  });

export const transformReadingBooks: Transformer<UserReadingBooksPageQuery> = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks,
      readingBooks: {count, edges},
      wishBooks,
      haveBooks,
      stackedBooks,
    },
  },
  {number: pageNumber},
) =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: edges.map(({node: {book}}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber: Number.parseInt(pageNumber, 10),
    pagesCount: countPages(count),
    records,
    readBooks,
    readingBooks: {count},
    wishBooks,
    haveBooks,
    stackedBooks,
    likedBooks: {count: 0},
  });

export const transformStackedBooks: Transformer<UserStackedBooksPageQuery> = (
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
      stackedBooks: {count, edges},
    },
  },
  {number: pageNumber},
) =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: edges.map(({node: {book}}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber: Number.parseInt(pageNumber, 10),
    pagesCount: countPages(count),
    records,
    readBooks,
    readingBooks,
    wishBooks,
    haveBooks,
    stackedBooks: {count},
    likedBooks: {count: 0},
  });

export const transformWishBooks: Transformer<UserWishBooksPageQuery> = (
  {
    user: {
      displayName,
      picture,
      userName,
      records,
      readBooks,
      readingBooks,
      wishBooks: {count, edges},
      haveBooks,
      stackedBooks,
    },
  },
  {number: pageNumber},
) =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    books: edges.map(({node: {book}}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    booksCount: count,
    pageNumber: Number.parseInt(pageNumber, 10),
    pagesCount: countPages(count),
    records,
    readBooks,
    readingBooks,
    wishBooks: {count},
    haveBooks,
    stackedBooks,
    likedBooks: {count: 0},
  });
