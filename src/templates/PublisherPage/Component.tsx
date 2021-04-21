import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/atoms/Layout';
import {SectionBooks} from './organisms/Section';
import {SideNav} from './organisms/SideNav';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  id,
  name,
  books,
}) => (
  <main className={clsx(className)}>
    {children}
    <Layout
      Side={({className, ...props}) => (
        <SideNav
          {...props}
          className={clsx(className, 'shadow-md')}
          {...{name}}
        />
      )}
      Main={({className, ...props}) => (
        <div
          className={clsx(className, 'grid', 'grid-cols-2', 'gap-4')}
          {...props}
        >
          <SectionBooks
            className={clsx('col-span-full', 'shadow-md')}
            id={id}
            name={name}
            books={books}
          />
        </div>
      )}
    />
  </main>
);
