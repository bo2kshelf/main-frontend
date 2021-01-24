import React from 'react';
import {UserPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = UserPageQuery;
export const Container: React.FC<ContainerProps> = ({user, ...props}) => {
  return (
    <Component
      {...props}
      user={user}
      read={user.readRecords.map(({book, ...rest}) => ({
        ...rest,
        book: {...book, cover: book.cover || null},
      }))}
      reading={user.readingRecords.map(({book, ...rest}) => ({
        ...rest,
        book: {...book, cover: book.cover || null},
      }))}
      have={user.haveRecords.map(({book, ...rest}) => ({
        ...rest,
        book: {...book, cover: book.cover || null},
      }))}
    />
  );
};
Container.displayName = 'UserPage';
