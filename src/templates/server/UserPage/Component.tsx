import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {ProfileMenu} from './ProfileMenu';
import {ReadingSection} from './ReadingSection';
import {RecordsSection} from './RecordsSection';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  displayName,
  picture,
  userName,
  records,
  readBooks,
  readingBooks,
  stackedBooks,
  haveBooks,
  wishReadBooks,
}) => (
  <main className={clsx(className)}>
    {children}
    <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'min-h-full')}>
      <ProfileMenu
        className={clsx(
          'sticky',
          'top-28',
          'w-full',
          'lg:w-1/4',
          'col-span-1',
          'col-start-1',
          'shadow-md',
          'h-full',
        )}
        displayName={displayName}
        userName={userName}
        picture={picture}
        records={records}
        readBooks={readBooks}
        readingBooks={readingBooks}
        stackedBooks={stackedBooks}
        haveBooks={haveBooks}
        wishReadBooks={wishReadBooks}
      />
      <div className={clsx('ml-0', 'lg:ml-4', 'flex-grow')}>
        <div className={clsx('grid', 'grid-cols-2', 'gap-4')}>
          <ReadingSection
            className={clsx('col-span-full', 'shadow-md')}
            displayName={displayName}
            readingBooks={readingBooks}
          />
          <RecordsSection
            className={clsx('col-span-full', 'shadow-md')}
            displayName={displayName}
            userName={userName}
            records={records}
          />
        </div>
      </div>
    </div>
  </main>
);
