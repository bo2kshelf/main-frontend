import React from 'react';
import {AuthorPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = AuthorPageQuery;
export const Container: React.FC<ContainerProps> = ({author, ...props}) => {
  return (
    <Component
      {...props}
      author={author}
      allBooks={author.books.edges.map(({node: book}) => ({
        ...book,
        cover: book.cover || null,
      }))}
      series={author.relatedSeries.edges.map(({node: series}) => ({
        ...series,
        books: series.books.edges.map(({node: {book}}) => ({
          ...book,
          cover: book.cover || null,
        })),
      }))}
    />
  );
};
Container.displayName = 'AuthorPage';
