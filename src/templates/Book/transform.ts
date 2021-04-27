import {BookPageQuery} from '~/graphql/api-public/codegen/graphql-request';
import {
  AuthorRole,
  authorsComparerByRoles,
  rolesPriorityComparer,
} from '~/lib/AuthorRole';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  title: string;
  subtitle?: string;
  isbn?: string;
  pages?: number;
  publishedAt?: string;
  languages?: string;
  cover?: string;
  authors: {
    id: string;
    name: string;
    roles: AuthorRole[];
    books: {id: string; title: string; cover?: string}[];
  }[];
  series: {
    id: string;
    title: string;
    books: {
      id: string;
      title: string;
      cover?: string;
    }[];
  }[];
  publishers: {
    id: string;
    name: string;
    books: {
      id: string;
      title: string;
      cover?: string;
    }[];
  }[];
};

export const transform: (result: BookPageQuery) => TransformedProps = ({
  book,
}) => {
  return avoidUndefined({
    ...book,
    subtitle: book.subtitle || undefined,
    isbn: book.isbn || undefined,
    cover: book.cover || undefined,
    authors: [...book.writtenBy]
      .sort(authorsComparerByRoles)
      .map(({author, roles}) => ({
        id: author.id,
        name: author.name,
        roles: [...roles].sort(rolesPriorityComparer),
        books: author.wroteBooks.nodes.map(({book}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      })),
    publishers: (book.publishedBy ? [book.publishedBy] : []).map(
      (publisher) => ({
        id: publisher.id,
        name: publisher.name,
        books: publisher.publishedBooks.nodes.map(({book}) => ({
          id: book.id,
          title: book.title,
          cover: book.cover || undefined,
        })),
      }),
    ),
    series: book.seriesOf.map(({series}) => ({
      id: series.id,
      title: series.title,
      books: series.seriesBooks.nodes.map(({book}) => ({
        ...book,
        cover: book.cover || undefined,
      })),
    })),
  });
};
