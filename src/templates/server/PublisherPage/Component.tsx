import clsx from 'clsx';
import React from 'react';
import {AllBooksSection, AllBooksSectionProps} from './AllBooksSection';

export type ComponentProps = {
  className?: string;
  publisher: AllBooksSectionProps['publisher'];
  allBooks: AllBooksSectionProps['books'];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  publisher,
  allBooks,
}) => (
  <main className={clsx(className)}>
    {children}
    <AllBooksSection
      className={clsx('w-full')}
      publisher={publisher}
      books={allBooks}
    />
  </main>
);
