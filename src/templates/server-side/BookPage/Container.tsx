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
        cover: book.cover || null,
        date: null,
        language: null,
        publisher: null,
        pages: null,
        authors: book.writedBy.map(({roles, author}) => ({
          ...author,
          roles: roles || null,
        })),
      }}
      series={book.seriesOf.map(({series}) => ({
        ...series,
        books: series.parts.map(({book}) => ({
          ...book,
          cover: book.cover || null,
        })),
      }))}
    />
  );
};
Container.displayName = 'BookPage';
