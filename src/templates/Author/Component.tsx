import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/atoms/Layout';
import {SectionSeries} from '../Book/organisms/Section';
import {BooksSection} from './organisms/Section';
import {SideNav} from './organisms/SideNav';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  id,
  name,
  books,
  series,
}) => (
  <main className={clsx(className)}>
    {children}
    <Layout
      Side={({className, ...props}) => (
        <SideNav
          {...props}
          className={clsx(className, 'shadow-md')}
          {...{name, series}}
        />
      )}
      Main={({className, ...props}) => (
        <div
          className={clsx(className, 'grid', 'grid-cols-2', 'gap-4')}
          {...props}
        >
          <BooksSection
            className={clsx('col-span-full', 'shadow-md')}
            id={id}
            name={name}
            books={books}
          />
          {series.map((node) => (
            <SectionSeries
              key={node.id}
              {...node}
              className={clsx('col-span-full', 'shadow-md')}
            />
          ))}
        </div>
      )}
    />
  </main>
);
