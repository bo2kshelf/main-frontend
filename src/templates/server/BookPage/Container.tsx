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
      series={book.seriesOf.parts.map(({series}) => ({
        ...series,
        books: series.booksOf.parts.map(({book}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      }))}
      publishers={book.publishedBy.map(({publisher}) => ({
        ...publisher,
        books: publisher.publications.map(({book}) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      }))}
    />
  );
};
Container.displayName = 'BookPage';
