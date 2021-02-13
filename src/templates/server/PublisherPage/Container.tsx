import React from 'react';
import {PublisherPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = PublisherPageQuery;
export const Container: React.FC<ContainerProps> = ({publisher, ...props}) => {
  return (
    <Component
      {...props}
      publisher={publisher}
      allBooks={publisher.publications.map(({book}) => ({
        ...book,
        cover: book.cover || undefined,
      }))}
    />
  );
};
Container.displayName = 'PublisherPage';
