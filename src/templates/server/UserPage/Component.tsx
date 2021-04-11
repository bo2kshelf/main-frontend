import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {ProfileMenu} from './ProfileMenu';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  displayName,
  picture,
  userName,
  readBooks,
  readingBooks,
  stackedBooks,
  haveBooks,
  wishReadBooks,
}) => (
  <main className={clsx(className)}>
    {children}
    <div className={clsx('grid', 'grid-cols-3', 'lg:grid-cols-4', 'gap-4')}>
      <ProfileMenu
        className={clsx('sticky', 'col-span-1', 'col-start-1', 'shadow-md')}
        displayName={displayName}
        userName={userName}
        picture={picture}
        readBooks={readBooks}
        readingBooks={readingBooks}
        stackedBooks={stackedBooks}
        haveBooks={haveBooks}
        wishReadBooks={wishReadBooks}
      />
      <div
        className={clsx('col-start-2', 'col-span-full', 'grid', 'grid-cols-1')}
      />
    </div>
  </main>
);
