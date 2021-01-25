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
        authors: book.authors.map(({roles, author}) => ({
          ...author,
          roles: roles || null,
        })),
        isbn: book.isbn || null,
        cover: book.cover || null,
        date: null,
        language: null,
        publisher: null,
        pages: null,
      }}
      series={book.relatedSeries.map((series) => ({
        ...series,
        books: series.books.edges.map(({node: {book}}) => ({
          ...book,
          cover: book.cover || null,
        })),
      }))}
    />
  );
};
Container.displayName = 'BookPage';
