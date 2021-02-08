import {useRouter} from 'next/router';
import React from 'react';
import {UserHaveBooksPageQuery} from '~/_generated/graphql-request';
import {getNextLink, getPreviousLink} from '../UserBooksPage';
import {Component} from '../UserBooksPage/Component';

export type ContainerProps = UserHaveBooksPageQuery;
export const Container: React.FC<ContainerProps> = ({
  account: {haveBooks, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      user={{...rest}}
      records={haveBooks.records.map(({book}) => ({
        book: {...book, cover: book.cover || null},
      }))}
      previousLink={getPreviousLink(
        'have',
        query as {username: string; number?: string},
        haveBooks.hasPrevious,
      )}
      nextLink={getNextLink(
        'have',
        query as {username: string; number?: string},
        haveBooks.hasNext,
      )}
      count={haveBooks.count}
      skip={haveBooks.skip}
      limit={haveBooks.limit}
    />
  );
};
Container.displayName = 'UserHaveBooksPage';
