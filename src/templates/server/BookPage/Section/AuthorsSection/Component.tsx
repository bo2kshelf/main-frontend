import clsx from 'clsx';
import React from 'react';
import {BooksSection} from '~/components/organisms/BooksSection';
import {AuthorsHead} from '../Head';

export type ComponentProps = {
  className?: string;
  author: {
    id: string;
    name: string;
    books: {id: string; cover?: string; title: string}[];
  };
};
export const Component: React.FC<ComponentProps> = ({
  author,
  className,
  ...props
}) => (
  <BooksSection
    className={clsx(className)}
    Header={() => (
      <AuthorsHead
        className={clsx('w-full', 'max-w-screen-xl', 'mx-auto', 'mb-4')}
        author={author}
      />
    )}
    books={author.books}
    {...props}
  />
);
Component.displayName = 'SeriesSection';
