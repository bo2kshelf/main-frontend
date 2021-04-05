import {PublisherPageQuery} from '~/graphql/codegen/graphql-request';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  name: string;
  books: {
    id: string;
    title: string;
    cover?: string;
  }[];
};

export const transform: (result: PublisherPageQuery) => TransformedProps = ({
  publisher,
}) =>
  avoidUndefined({
    ...publisher,
    books: publisher.publications.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  });
