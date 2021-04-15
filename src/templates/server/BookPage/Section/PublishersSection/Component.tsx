import clsx from 'clsx';
import React from 'react';
import {BooksSection} from '~/components/organisms/BooksSection';
import {PublisherHead} from '../Head';

export type ComponentProps = {
  className?: string;
  publisher: {
    id: string;
    name: string;
    books: {id: string; cover?: string; title: string}[];
  };
};
export const Component: React.FC<ComponentProps> = ({
  publisher,
  className,
  ...props
}) => (
  <BooksSection
    className={clsx(className)}
    Header={() => (
      <PublisherHead
        className={clsx('w-full', 'max-w-screen-xl', 'mx-auto', 'mb-4')}
        publisher={publisher}
      />
    )}
    books={publisher.books}
    {...props}
  />
);
Component.displayName = 'PublisherSection';
