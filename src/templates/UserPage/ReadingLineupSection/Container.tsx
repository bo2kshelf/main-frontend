import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  displayName: string;
  userName: string;
  readingBooks: {
    books: {
      id: string;
      title: string;
      cover?: string;
    }[];
    hasNext: boolean;
  };
};
export const Container: React.FC<ContainerProps> = ({
  readingBooks,
  ...props
}) => {
  return (
    <Component
      {...props}
      books={readingBooks.books}
      hasMore={readingBooks.hasNext}
    />
  );
};
