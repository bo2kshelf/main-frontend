import {PersonalUserPageQuery} from '~/graphql/codegen/apollo';
import {TransformedProps as UserPageTransformedProps} from '~/templates/server/UserPage';

export type TransformedProps = UserPageTransformedProps;

export const transform = ({
  currentUser: {
    userName,
    displayName,
    picture,
    hasBooks,
    readBooks,
    readingBooks,
    stackedBooks,
  },
}: PersonalUserPageQuery): TransformedProps => ({
  userName,
  displayName,
  picture,
  readBooks: {
    hasNext: readBooks.hasNext,
    books: readBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  },
  readingBooks: {
    hasNext: readingBooks.hasNext,
    books: readingBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  },
  haveBooks: {
    hasNext: hasBooks.hasNext,
    books: hasBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  },
  stackedBooks: {
    hasNext: stackedBooks.hasNext,
    books: stackedBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  },
});
