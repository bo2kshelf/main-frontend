import {useRouter} from 'next/router';
import React from 'react';
import {UserWishReadBooksPageQuery} from '~/_generated/graphql-request';
import {getNextLink, getPreviousLink} from '../UserBooksPage';
import {Component} from '../UserBooksPage/Component';

export type ContainerProps = UserWishReadBooksPageQuery;
export const Container: React.FC<ContainerProps> = ({
  account: {wishReadBooks, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      user={{...rest}}
      records={wishReadBooks.records.map(({book}) => ({
        book: {...book, cover: book.cover || null},
      }))}
      previousLink={getPreviousLink(
        'wish',
        query as {username: string; number?: string},
        wishReadBooks.hasPrevious,
      )}
      nextLink={getNextLink(
        'wish',
        query as {username: string; number?: string},
        wishReadBooks.hasNext,
      )}
      count={wishReadBooks.count}
      skip={wishReadBooks.skip}
      limit={wishReadBooks.limit}
    />
  );
};
Container.displayName = 'UserWishReadBooksPage';
