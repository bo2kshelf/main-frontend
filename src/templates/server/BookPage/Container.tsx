import React from 'react';
import {BookPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = BookPageQuery;
export const Container: React.FC<ContainerProps> = ({book, ...props}) => {
  return (
    <Component
      {...props}
      book={{
        ...book,
        isbn: book.isbn || null,
        cover: book.cover || undefined,
        date: null,
        language: null,
        publisher: null,
        pages: null,
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
    />
  );
};
Container.displayName = 'BookPage';
