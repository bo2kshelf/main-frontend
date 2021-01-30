import React from 'react';
import {UserPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = UserPageQuery;
export const Container: React.FC<ContainerProps> = ({profile, ...props}) => {
  return (
    <Component
      {...props}
      user={profile}
      read={profile.readRecords.map(({book, ...rest}) => ({
        ...rest,
        book: {...book, cover: book.cover || null},
      }))}
      reading={profile.readingRecords.map(({book, ...rest}) => ({
        ...rest,
        book: {...book, cover: book.cover || null},
      }))}
      have={profile.haveRecords.map(({book, ...rest}) => ({
        ...rest,
        book: {...book, cover: book.cover || null},
      }))}
    />
  );
};
Container.displayName = 'UserPage';
