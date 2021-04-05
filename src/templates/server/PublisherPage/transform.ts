import {PublisherPageQuery} from '~/graphql/codegen/graphql-request';

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
}) => ({
  ...publisher,
  books: publisher.publications.nodes.map(({book}) => ({
    ...book,
    cover: book.cover || undefined,
  })),
});
