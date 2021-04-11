import {UserPageQuery} from '~/graphql/codegen/graphql-request';
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
  records: {
    count: number;
    hasNext: boolean;
    skip: number;
    limit: number;
    record: {
      readAt?: string;
      book: {id: string; title: string; cover?: string};
    }[];
  };
  readBooks: {count: number};
  haveBooks: {count: number};
  stackedBooks: {count: number};
  wishReadBooks: {count: number};
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
      hasNext: user.records.hasNext,
      limit: recordLimit,
      skip: recordSkip,
      record: user.records.nodes.map(({book, readAt}) => ({
        readAt: readAt || undefined,
        book: {id: book.id, title: book.title, cover: book.cover || undefined},
      })),
    },
    readingBooks: {
      count: user.readingBooks.count,
      hasNext: user.readingBooks.hasNext,
      books: user.readingBooks.nodes.map(({book}) => ({
        id: book.id,
        title: book.title,
        cover: book.cover || undefined,
      })),
    },
    haveBooks: {
      count: user.hasBooks.count,
    },
    stackedBooks: {
      count: user.stackedBooks.count,
    },
    readBooks: {
      count: user.readBooks.count,
    },
    wishReadBooks: {
      count: user.wishesReadBooks.count,
    },
  });
