import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  displayName: string;
  userName: string;
  likedBooks: {
    books: {
      id: string;
      title: string;
      cover?: string;
    }[];
    hasNext: boolean;
  };
};
export const Container: React.FC<ContainerProps> = ({likedBooks, ...props}) => {
  return (
    <Component
      {...props}
      books={likedBooks.books}
      hasMore={likedBooks.hasNext}
    />
  );
};
