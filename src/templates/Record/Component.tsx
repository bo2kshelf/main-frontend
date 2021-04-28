import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/atoms/Layout';
import {SideNav} from '../Book/organisms/SideNav';
import {Section} from './organisms/Section';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  id,
  readAt,
  count,
  user,
  book,
  review,
}) => (
  <main className={clsx(className)}>
    {children}
    <Layout
      Side={({className, ...props}) => (
        <SideNav
          {...props}
          className={clsx(className, 'shadow-md')}
          {...book}
        />
      )}
      Main={({className, ...props}) => (
        <div
          {...props}
          className={clsx(className, 'grid', 'grid-cols-2', 'gap-4')}
        >
          <Section
            className={clsx('col-span-full', 'shadow-md')}
            {...{readAt, count, user, book, review}}
          />
        </div>
      )}
    />
  </main>
);
