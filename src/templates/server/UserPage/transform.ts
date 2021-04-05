import {UserPageQuery} from '~/graphql/codegen/graphql-request';

export type TransformedProps = {
  picture: string;
  userName: string;
  displayName: string;
  readBooks: {
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
  };
  readingBooks: {
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
  };
  haveBooks: {
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
  };
  stackedBooks: {
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
  };
};

export const transform: (result: UserPageQuery) => TransformedProps = ({
  user,
}) => ({
  ...user,
  readBooks: {
    hasNext: user.hasBooks.hasNext,
    books: user.hasBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  },
  readingBooks: {
    hasNext: user.hasBooks.hasNext,
    books: user.hasBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  },
  haveBooks: {
    hasNext: user.hasBooks.hasNext,
    books: user.hasBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  },
  stackedBooks: {
    hasNext: user.hasBooks.hasNext,
    books: user.hasBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  },
});
