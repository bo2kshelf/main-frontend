import {useRouter} from 'next/router';
import React from 'react';
import {UserWishReadBooksPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';
import {getNextLink, getPreviousLink} from './link';

export type UserWishReadBooksPageProps = UserWishReadBooksPageQuery;
export const UserWishReadBooksPage: React.FC<UserWishReadBooksPageProps> = ({
  account: {books, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      user={{...rest}}
      records={books.records.map(({book}) => ({
        book: {...book, cover: book.cover || null},
      }))}
      previousLink={getPreviousLink(
        'wish',
        query as {username: string; number?: string},
        books.hasPrevious,
      )}
      nextLink={getNextLink(
        'wish',
        query as {username: string; number?: string},
        books.hasNext,
      )}
      count={books.count}
      skip={books.skip}
      limit={books.limit}
    />
  );
};