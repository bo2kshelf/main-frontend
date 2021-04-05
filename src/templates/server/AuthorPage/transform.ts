import {AuthorPageQuery} from '~/graphql/codegen/graphql-request';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  name: string;
  books: {id: string; title: string; cover?: string}[];
  series: {
    id: string;
    title: string;
    books: {id: string; title: string; cover?: string}[];
  }[];
};

export const transform: (result: AuthorPageQuery) => TransformedProps = ({
  author,
}) =>
  avoidUndefined({
    ...author,
    books: author.writed.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
    series: author.relatedSeries.nodes.map(({series, relatedBooks}) => ({
      ...series,
      books: relatedBooks.map((book) => ({
        ...book,
        cover: book.cover || undefined,
      })),
    })),
  });
