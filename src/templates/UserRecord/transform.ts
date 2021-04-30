import {UserRecordsPageQuery} from '~/graphql/api-public/codegen/graphql-request';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  userName: string;
  displayName: string;
  picture: string;
  // prim
  records: {
    id: string;
    book: {
      id: string;
      title: string;
      subtitle?: string;
      cover?: string;
    };
    user: {
      displayName: string;
      userName: string;
      picture: string;
    };
    review?: string;
  }[];
  count: number;
  pageNumber: number;
  hasNext: boolean;
  // meta
  readingBooks: {count: number};
  likedBooks: {count: number};
  readBooks: {count: number};
  haveBooks: {count: number};
  stackedBooks: {count: number};
  wishBooks: {count: number};
};

export const transform: (
  result: UserRecordsPageQuery,
  params: {pageNumber: number},
) => TransformedProps = (
  {
    user: {
      userName,
      displayName,
      picture,
      records,
      haveBooks,
      readBooks,
      readingBooks,
      stackedBooks,
      wishBooks,
    },
  },
  {pageNumber},
): TransformedProps =>
  avoidUndefined({
    userName,
    displayName,
    picture,
    records: records.edges.map(({node: {id, readAt, book, user}}) => ({
      id,
      readAt,
      book: {
        id: book.id,
        title: book.title,
        cover: book.cover || undefined,
      },
      user: {
        displayName: user.displayName,
        userName: user.userName,
        picture: user.picture,
      },
    })),
    count: records.count,
    pageNumber,
    hasNext: Boolean(records.pageInfo.hasNextPage),
    readBooks: {count: readBooks.count},
    readingBooks: {count: readingBooks.count},
    wishBooks: {count: wishBooks.count},
    haveBooks: {count: haveBooks.count},
    stackedBooks: {count: stackedBooks.count},
    likedBooks: {count: 0},
  });
