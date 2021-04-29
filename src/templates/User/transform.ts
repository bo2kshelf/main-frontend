import {UserPageQuery} from '~/graphql/api-public/codegen/graphql-request';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  picture: string;
  userName: string;
  displayName: string;
  readingBooks: {
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
    count: number;
  };
  likedBooks: {
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
    count: number;
  };
  records: {
    count: number;
    hasNext: boolean;
    skip: number;
    limit: number;
    nodes: {
      id: string;
      readAt?: string;
      user: {userName: string; picture: string; displayName: string};
      book: {id: string; title: string; subtitle?: string; cover?: string};
    }[];
  };
  readBooks: {count: number};
  haveBooks: {count: number};
  stackedBooks: {count: number};
  wishBooks: {count: number};
};

export const transform: (
  result: UserPageQuery,
  variables: {recordSkip: number; recordLimit: number},
) => TransformedProps = ({user}, {recordLimit, recordSkip}) =>
  avoidUndefined({
    userName: user.userName,
    displayName: user.displayName,
    picture: user.picture,
    records: {
      count: user.records.count,
      hasNext: Boolean(user.records.pageInfo.hasNextPage),
      limit: recordLimit,
      skip: recordSkip,
      nodes: user.records.edges.map(
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
      count: user.readingBooks.count,
      hasNext: Boolean(user.readingBooks.pageInfo.hasNextPage),
      books: user.readingBooks.edges.map(({node: {book}}) => ({
        id: book.id,
        title: book.title,
        cover: book.cover || undefined,
      })),
    },
    likedBooks: {count: 0, hasNext: false, books: []},
    haveBooks: {
      count: user.haveBooks.count,
    },
    stackedBooks: {
      count: user.stackedBooks.count,
    },
    readBooks: {
      count: user.readBooks.count,
    },
    wishBooks: {
      count: user.wishBooks.count,
    },
  });
