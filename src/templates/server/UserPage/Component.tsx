import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {ProfileSection} from './ProfileSection';
import {
  HaveRecordsSection,
  ReadingRecordsSection,
  ReadRecordsSection,
  StackedRecordsSection,
} from './RecordsSection';
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
}) => (
  <main className={clsx(className)}>
    {children}
    <ProfileSection
      className={clsx('w-full')}
      user={{
        displayName,
        picture,
        userName,
      }}
    />
    <ReadingRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={{displayName, userName}}
      {...readingBooks}
    />
    <ReadRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={{displayName, userName}}
      {...readBooks}
    />
    <HaveRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={{displayName, userName}}
      {...haveBooks}
    />
    <StackedRecordsSection
      className={clsx('w-full', 'mt-8')}
      user={{displayName, userName}}
      {...stackedBooks}
    />
  </main>
);
