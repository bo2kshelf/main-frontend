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
        records: currentUser.readBooks.nodes.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      reading={{
        ...currentUser.readingBooks,
        records: currentUser.readingBooks.nodes.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      have={{
        ...currentUser.hasBooks,
        records: currentUser.hasBooks.nodes.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
      stacked={{
        ...currentUser.stackedBooks,
        records: currentUser.stackedBooks.nodes.map(({book, ...rest}) => ({
          ...rest,
          book: {...book, cover: book.cover || undefined},
        })),
      }}
    />
  );
};
