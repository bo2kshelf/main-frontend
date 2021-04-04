import {useRouter} from 'next/router';
import React from 'react';
import {UserReadBooksPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';
import {ReadBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserReadBooksPageProps = UserReadBooksPageQuery;
export const UserReadBooksPage: React.FC<UserReadBooksPageProps> = ({
  user: {books, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      user={{...rest}}
      records={books.nodes.map(({book}) => ({
        book: {...book, cover: book.cover || undefined},
      }))}
      previousLink={getPreviousLink(
        'read',
        query as {username: string; number?: string},
        books.hasPrevious,
      )}
      nextLink={getNextLink(
        'read',
        query as {username: string; number?: string},
        books.hasNext,
      )}
      count={books.count}
      Header={ReadBooksHeader}
    />
  );
};
