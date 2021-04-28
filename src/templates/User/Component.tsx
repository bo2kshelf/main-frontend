import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/atoms/Layout';
import {SectionLiked, SectionReading} from './organisms/LineupSection';
import {ProfileMenu} from './organisms/ProfileMenu';
import {RecordsSection} from './organisms/RecordsSection';
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
  wishBooks,
  likedBooks,
}) => (
  <main className={clsx(className)}>
    {children}
    <Layout
      Side={({className, ...props}) => (
        <ProfileMenu
          {...props}
          className={clsx(className, 'shadow-md')}
          {...{
            displayName,
            userName,
            picture,
            records,
            readBooks,
            readingBooks,
            stackedBooks,
            haveBooks,
            wishBooks,
            likedBooks,
          }}
        />
      )}
      Main={({className, ...props}) => (
        <div
          {...props}
          className={clsx(className, 'grid', 'grid-cols-2', 'gap-4')}
        >
          <SectionReading
            className={clsx('col-span-full', 'shadow-md')}
            {...{displayName, userName, readingBooks}}
          />
          <SectionLiked
            className={clsx('col-span-full', 'shadow-md')}
            {...{displayName, userName, likedBooks}}
          />
          <RecordsSection
            className={clsx('col-span-full', 'shadow-md')}
            {...{displayName, userName, records}}
          />
        </div>
      )}
    />
  </main>
);
