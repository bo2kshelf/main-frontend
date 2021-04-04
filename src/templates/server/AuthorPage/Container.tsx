import React from 'react';
import {AuthorPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';

export type ContainerProps = AuthorPageQuery;
export const Container: React.FC<ContainerProps> = ({author, ...props}) => {
  return (
    <Component
      {...props}
      author={author}
      allBooks={author.writed.nodes.map(({book}) => ({
        ...book,
        cover: book.cover || undefined,
      }))}
      series={author.relatedSeries.nodes.map(({series, relatedBooks}) => ({
        ...series,
        books: relatedBooks.map((book) => ({
          ...book,
          cover: book.cover || undefined,
        })),
      }))}
    />
  );
};
Container.displayName = 'AuthorPage';
