import React from 'react';
import {UserPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';

export type ContainerProps = UserPageQuery;
export const Container: React.FC<ContainerProps> = ({
  user: account,
  ...props
}) => {
  return (
    <Component
      {...props}
      user={account}
      read={{
        ...account.readBooks,
        records: account.readBooks.nodes.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      reading={{
        ...account.readingBooks,
        records: account.readingBooks.nodes.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      have={{
        ...account.hasBooks,
        records: account.hasBooks.nodes.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      stacked={{
        ...account.stackedBooks,
        records: account.stackedBooks.nodes.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
    />
  );
};
Container.displayName = 'UserPage';
