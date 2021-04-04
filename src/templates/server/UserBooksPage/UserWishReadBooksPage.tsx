import {useRouter} from 'next/router';
import React from 'react';
import {UserWishReadBooksPageQuery} from '~/graphql/codegen/graphql-request';
import {Component} from './Component';
import {WishReadBooksHeader} from './Header';
import {getNextLink, getPreviousLink} from './link';

export type UserWishReadBooksPageProps = UserWishReadBooksPageQuery;
export const UserWishReadBooksPage: React.FC<UserWishReadBooksPageProps> = ({
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
      Header={WishReadBooksHeader}
    />
  );
};
