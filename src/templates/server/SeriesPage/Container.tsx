import React from 'react';
import {SeriesPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';

export type ContainerProps = SeriesPageQuery;
export const Container: React.FC<ContainerProps> = ({series, ...props}) => {
  return (
    <Component
      {...props}
      title={series.title}
      parts={series.consistsOf.nodes.map(({book}) => ({
        book: {
          ...book,
          cover: book.cover || undefined,
        },
      }))}
      relatedAuthors={series.relatedAuthors.nodes.map(({author}) => ({
        author,
      }))}
    />
  );
};
Container.displayName = 'SeriesPage';
