import {SeriesPageQuery} from '~/graphql/api-public/codegen/graphql-request';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  id: string;
  title: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
  relatedBooks: {
    id: string;
    title: string;
    cover?: string;
  }[];
  authors: {
    id: string;
    name: string;
  }[];
};

export const transform: (result: SeriesPageQuery) => TransformedProps = ({
  series,
}) =>
  avoidUndefined({
    ...series,
    books: series.parts.nodes.map(({book}) => ({
      id: book.id,
      title: book.title,
      cover: book.cover || undefined,
    })),
    relatedBooks: [],
    authors: series.relatedAuthors.nodes.map(({author}) => ({
      id: author.id,
      name: author.name,
    })),
  });
