import {PublisherPageQuery} from '~/graphql/api-public/codegen/graphql-request';
import {avoidUndefined} from '~/lib/utils';

export type TransformedProps = {
  id: string;
  name: string;
  books: {id: string; title: string; cover?: string}[];
};

export const transform: (result: PublisherPageQuery) => TransformedProps = ({
  publisher,
}) =>
  avoidUndefined({
    id: publisher.id,
    name: publisher.name,
    books: publisher.publishedBooks.nodes.map(({book}) => ({
      ...book,
      cover: book.cover || undefined,
    })),
  });
