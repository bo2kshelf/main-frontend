import React from 'react';
import {SeriesPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = SeriesPageQuery;
export const Container: React.FC<ContainerProps> = ({series, ...props}) => {
  return (
    <Component
      {...props}
      {...series}
      parts={series.booksOf.parts.map(({book}) => ({
        book: {
          ...book,
          cover: book.cover || undefined,
        },
      }))}
    />
  );
};
Container.displayName = 'SeriesPage';
