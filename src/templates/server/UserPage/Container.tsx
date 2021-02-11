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
        ...account.readBooks,
        records: account.readBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || null},
        })),
      }}
      reading={{
        ...account.readingBooks,
        records: account.readingBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || null},
        })),
      }}
      have={{
        ...account.haveBooks,
        records: account.haveBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || null},
        })),
      }}
      stacked={{
        ...account.stackedBooks,
        records: account.stackedBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || null},
        })),
      }}
    />
  );
};
Container.displayName = 'UserPage';
