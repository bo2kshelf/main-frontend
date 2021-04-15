import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  userName: string;
  displayName: string;
  picture: string;
  records: {count: number};
  readBooks: {count: number};
  readingBooks: {count: number};
  stackedBooks: {count: number};
  haveBooks: {count: number};
  wishReadBooks: {count: number};
};
export const Container: React.FC<ContainerProps> = ({
  records,
  readBooks,
  readingBooks,
  stackedBooks,
  haveBooks,
  wishReadBooks,
  ...props
}) => {
  return (
    <Component
      {...props}
      recordsCount={records.count}
      readBooksCount={readBooks.count}
      readingBooksCount={readingBooks.count}
      haveBooksCount={haveBooks.count}
      stackedBooksCount={stackedBooks.count}
      wishReadBooksCount={wishReadBooks.count}
    />
  );
};
Container.displayName = 'ProfileMenu';
