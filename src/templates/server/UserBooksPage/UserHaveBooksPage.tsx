import {useRouter} from 'next/router';
import React from 'react';
import {UserHaveBooksPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';
import {HaveBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserHaveBooksPageProps = UserHaveBooksPageQuery;
export const UserHaveBooksPage: React.FC<UserHaveBooksPageProps> = ({
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
        'have',
        query as {username: string; number?: string},
        books.hasPrevious,
      )}
      nextLink={getNextLink(
        'have',
        query as {username: string; number?: string},
        books.hasNext,
      )}
      count={books.count}
      Header={HaveBooksHeader}
    />
  );
};
