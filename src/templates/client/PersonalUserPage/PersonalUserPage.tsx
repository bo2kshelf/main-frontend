import React from 'react';
import {PersonalUserPageQuery} from '~/graphql/codegen/apollo';
import {Component} from '../../server/UserPage';

export type ContainerProps = PersonalUserPageQuery;
export const Container: React.FC<ContainerProps> = ({currentUser}) => {
  return (
    <Component
      user={{
        displayName: currentUser.displayName,
        userName: currentUser.userName,
        picture: currentUser.picture,
      }}
      read={{
        ...currentUser.readBooks,
        records: currentUser.readBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      reading={{
        ...currentUser.readingBooks,
        records: currentUser.readingBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      have={{
        ...currentUser.haveBooks,
        records: currentUser.haveBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      stacked={{
        ...currentUser.stackedBooks,
        records: currentUser.stackedBooks.records.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
    />
  );
};
