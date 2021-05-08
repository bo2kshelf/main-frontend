import {CurrentUserPageQuery} from '~/graphql/api-authenticated/codegen/apollo';
import {avoidUndefined} from '~/lib/utils';
import {TransformedProps as UserPageTransformedProps} from '~/templates/User';

export type TransformedProps = UserPageTransformedProps;

export const transform: (
  result: CurrentUserPageQuery,
  variables: {recordSkip: number; recordLimit: number},
) => TransformedProps = ({currentUser}, {recordLimit, recordSkip}) =>
  avoidUndefined({
    userName: currentUser.userName,
    displayName: currentUser.displayName,
    picture: currentUser.picture,
    records: {
      count: currentUser.records.count,
      hasNext: Boolean(currentUser.records.pageInfo.hasNextPage),
      limit: recordLimit,
      skip: recordSkip,
      nodes: currentUser.records.edges.map(
        ({node: {id, readAt, book: recordBook, user: recordUser}}) => ({
          id,
          readAt: readAt || undefined,
          user: {
            userName: recordUser.userName,
            displayName: recordUser.displayName,
            picture: recordUser.picture,
          },
          book: {
            id: recordBook.id,
            title: recordBook.title,
            subtitle: recordBook.subtitle || undefined,
            cover: recordBook.cover || undefined,
          },
        }),
      ),
    },
    readingBooks: {
      count: currentUser.readingBooks.count,
      hasNext: Boolean(currentUser.readingBooks.pageInfo.hasNextPage),
      books: currentUser.readingBooks.edges.map(({node: {book}}) => ({
        id: book.id,
        title: book.title,
        cover: book.cover || undefined,
      })),
    },
    likedBooks: {count: 0, hasNext: false, books: []},
    haveBooks: {
      count: currentUser.haveBooks.count,
    },
    stackedBooks: {
      count: currentUser.stackedBooks.count,
    },
    readBooks: {
      count: currentUser.readBooks.count,
    },
    wishBooks: {
      count: currentUser.wishBooks.count,
    },
  });
