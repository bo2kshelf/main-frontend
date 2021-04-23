import {PersonalUserPageQuery} from '~/graphql/api-authenticated/codegen/apollo';
import {avoidUndefined} from '~/lib/utils';
import {TransformedProps as UserPageTransformedProps} from '~/templates/UserPage';

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
}: PersonalUserPageQuery): TransformedProps =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    likedBooks: {count: 0, hasNext: false, books: []},
    records: {count: 0, hasNext: false, limit: 0, skip: 0, nodes: []},
    readBooks: {
      count: 0,
      hasNext: readBooks.hasNext,
      books: readBooks.nodes.map(({id, title, cover}) => ({
        id,
        title,
        cover: cover || undefined,
      })),
    },
    readingBooks: {
      count: 0,
      hasNext: readingBooks.hasNext,
      books: readingBooks.nodes.map(({book}) => ({
        ...book,
        cover: book.cover || undefined,
      })),
    },
    haveBooks: {
      count: 0,
      hasNext: hasBooks.hasNext,
      books: hasBooks.nodes.map(({book}) => ({
        ...book,
        cover: book.cover || undefined,
      })),
    },
    stackedBooks: {
      count: 0,
      hasNext: stackedBooks.hasNext,
      books: stackedBooks.nodes.map(({book}) => ({
        ...book,
        cover: book.cover || undefined,
      })),
    },
    wishReadBooks: {
      count: 0,
    },
  });
