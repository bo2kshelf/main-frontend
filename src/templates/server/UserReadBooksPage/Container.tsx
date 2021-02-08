import {useRouter} from 'next/router';
import React from 'react';
import {UserReadBooksPageQuery} from '~/_generated/graphql-request';
import {getNextLink, getPreviousLink} from '../UserBooksPage';
import {Component} from '../UserBooksPage/Component';

export type ContainerProps = UserReadBooksPageQuery;
export const Container: React.FC<ContainerProps> = ({
  account: {readBooks, ...rest},
  ...props
}) => {
  const {query} = useRouter();

  return (
    <Component
      {...props}
      user={{...rest}}
      records={readBooks.records.map(({book}) => ({
        book: {...book, cover: book.cover || null},
      }))}
      previousLink={getPreviousLink(
        'read',
        query as {username: string; number?: string},
        readBooks.hasPrevious,
      )}
      nextLink={getNextLink(
        'read',
        query as {username: string; number?: string},
        readBooks.hasNext,
      )}
      count={readBooks.count}
      skip={readBooks.skip}
      limit={readBooks.limit}
    />
  );
};
Container.displayName = 'UserReadBooksPage';
