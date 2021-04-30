import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/atoms/Layout';
import {ProfileMenu} from '../User/organisms/ProfileMenu';
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
  count,
  pageNumber,
  hasNext,
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
            records: {count},
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
          <RecordsSection
            className={clsx('col-span-full', 'shadow-md')}
            {...{userName, displayName, records, count, hasNext, pageNumber}}
          />
        </div>
      )}
    />
  </main>
);
