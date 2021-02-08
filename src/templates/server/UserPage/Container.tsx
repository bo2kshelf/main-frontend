import React from 'react';
import {UserPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = UserPageQuery;
export const Container: React.FC<ContainerProps> = ({account, ...props}) => {
  return (
    <Component
      {...props}
      user={account}
      read={{
        records: account.readBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || null},
        })),
        hasMore: account.readBooks.hasNext,
      }}
      reading={{
        records: account.readingBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || null},
        })),
        hasMore: account.readingBooks.hasNext,
      }}
      have={{
        records: account.haveBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || null},
        })),
        hasMore: account.haveBooks.hasNext,
      }}
      stacked={{
        records: account.stackedBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || null},
        })),
        hasMore: account.stackedBooks.hasNext,
      }}
    />
  );
};
Container.displayName = 'UserPage';
