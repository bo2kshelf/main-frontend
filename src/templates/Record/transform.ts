import {RecordPageQuery} from '~/graphql/api-public/codegen/graphql-request';
import {AuthorRole} from '~/lib/AuthorRole';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  id: string;
  readAt: string;
  count: number;
  book: {
    id: string;
    title: string;
    subtitle?: string;
    isbn?: string;
    pages?: number;
    publishedAt?: string;
    languages?: string;
    cover?: string;
    authors: {id: string; name: string; roles: AuthorRole[]}[];
  };
  user: {
    displayName: string;
    uniqueName: string;
    picture: string;
  };
  review?: string;
};

export const transform: (result: RecordPageQuery) => TransformedProps = ({
  record: {id, readAt, book, user},
}) => {
  return avoidUndefined({
    id,
    readAt: readAt || undefined,
    count: 1,
    book: {
      id: book.id,
      title: book.title,
      subtitle: book.subtitle || undefined,
      isbn: book.isbn || undefined,
      cover: book.cover || undefined,
      authors: book.writtenBy.map(({author, roles}) => ({
        id: author.id,
        name: author.name,
        roles,
      })),
    },
    user: {
      displayName: user.displayName,
      uniqueName: user.uniqueName,
      picture: user.picture,
    },
  });
};
