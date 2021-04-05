import {
  UserHaveBooksPageQuery,
  UserReadBooksPageQuery,
  UserReadingBooksPageQuery,
  UserStackedBooksPageQuery,
  UserWishReadBooksPageQuery,
} from '~/graphql/codegen/graphql-request';

export type PageType = 'have' | 'reading' | 'stacked' | 'wish' | 'read';

export type TransformedProps<P extends PageType> = {
  userName: string;
  displayName: string;
  picture: string;
  books: {id: string; title: string; cover?: string}[];
  count: number;
  hasPrevious: boolean;
  hasNext: boolean;
  pageType: P;
  pageNumber: number;
};

export const transformHave: (
  result: UserHaveBooksPageQuery,
  query: {number?: number},
) => TransformedProps<'have'> = (
  {
    user: {
      books: {count, hasPrevious, hasNext, nodes},
      displayName,
      picture,
      userName,
    },
  },
  {number},
): TransformedProps<'have'> => ({
  displayName,
  userName,
  picture,
  count,
  hasPrevious,
  hasNext,
  books: nodes.map(({book}) => ({
    ...book,
    cover: book.cover || undefined,
  })),
  pageType: 'have',
  pageNumber: number || 1,
});

export const transformReading: (
  result: UserReadingBooksPageQuery,
  query: {number?: number},
) => TransformedProps<'reading'> = (
  {
    user: {
      books: {count, hasPrevious, hasNext, nodes},
      displayName,
      picture,
      userName,
    },
  },
  {number},
) => ({
  displayName,
  userName,
  picture,
  count,
  hasPrevious,
  hasNext,
  books: nodes.map(({book}) => ({
    ...book,
    cover: book.cover || undefined,
  })),
  pageType: 'reading',
  pageNumber: number || 1,
});

export const transformStacked: (
  result: UserStackedBooksPageQuery,
  query: {number?: number},
) => TransformedProps<'stacked'> = (
  {
    user: {
      books: {count, hasPrevious, hasNext, nodes},
      displayName,
      picture,
      userName,
    },
  },
  {number},
) => ({
  displayName,
  userName,
  picture,
  count,
  hasPrevious,
  hasNext,
  books: nodes.map(({book}) => ({
    ...book,
    cover: book.cover || undefined,
  })),
  pageType: 'stacked',
  pageNumber: number || 1,
});

export const transformWish: (
  result: UserWishReadBooksPageQuery,
  query: {number?: number},
) => TransformedProps<'wish'> = (
  {
    user: {
      books: {count, hasPrevious, hasNext, nodes},
      displayName,
      picture,
      userName,
    },
  },
  {number},
) => ({
  displayName,
  userName,
  picture,
  count,
  hasPrevious,
  hasNext,
  books: nodes.map(({book}) => ({
    ...book,
    cover: book.cover || undefined,
  })),
  pageType: 'wish',
  pageNumber: number || 1,
});

export const transformRead: (
  result: UserReadBooksPageQuery,
  query: {number?: number},
) => TransformedProps<'read'> = (
  {
    user: {
      books: {count, hasPrevious, hasNext, nodes},
      displayName,
      picture,
      userName,
    },
  },
  {number},
) => ({
  displayName,
  userName,
  picture,
  count,
  hasPrevious,
  hasNext,
  books: nodes.map(({book}) => ({
    ...book,
    cover: book.cover || undefined,
  })),
  pageType: 'read',
  pageNumber: number || 1,
});
