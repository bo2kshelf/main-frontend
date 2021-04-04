import React from 'react';
import {BookPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';

export type ContainerProps = BookPageQuery;
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return (
    <Component
      {...props}
      book={{
        ...book,
        subtitle: book.subtitle || undefined,
        isbn: book.isbn || undefined,
        cover: book.cover || undefined,
        publishers: book.publishedBy.map(({publisher}) => publisher),
        authors: book.writedBy.map(({roles, author}) => ({
          ...author,
          roles: roles || undefined,
        })),
      }}
      authors={book.writedBy.map(({author, roles}) => ({
        ...author,
        roles: roles || undefined,
        books: author.writed.nodes.map(({book}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      }))}
      series={book.seriesOf.nodes.map(({series}) => ({
        ...series,
        books: series.consistsOf.nodes.map(({book}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      }))}
      publishers={book.publishedBy.map(({publisher}) => ({
        ...publisher,
        books: publisher.publications.nodes.map(({book}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      }))}
    />
  );
};
Container.displayName = 'BookPage';
