import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {BooksSection} from '~/components/common/BooksSection';
import {ProfileSection} from '../UserPage/ProfileSection';
import {HeaderProps} from './Header';
import {PageType, TransformedProps} from './transform';

export type ComponentProps<P extends PageType> = Merge<
  TransformedProps<P>,
  {className?: string; Header: React.FC<HeaderProps>}
>;
export const Component: React.FC<ComponentProps<PageType>> = ({
  className,
  displayName,
  picture,
  userName,
  books,
  count,
  Header,
}) => (
  <main className={clsx(className)}>
    <ProfileSection
      className={clsx('w-full')}
      user={{displayName, picture, userName}}
    />
    <Header
      className={clsx('w-full', 'mt-4', 'mb-4')}
      account={{displayName}}
      records={{count}}
    />
    {books.length > 0 && (
      <>
        <BooksSection className={clsx('w-full', 'my-8')} books={books} />
      </>
    )}
  </main>
);
