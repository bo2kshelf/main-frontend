import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {
  AuthorsSection,
  PublishersSection,
  SeriesSection,
} from './organisms/Section';
import {SideNav} from './organisms/SideNav';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  isbn,
  title,
  cover,
  subtitle,
  authors,
  series,
  publishers,
  languages,
  publishedAt,
  pages,
}) => (
  <main className={clsx(className)}>
    {children}
    <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'min-h-full')}>
      <SideNav
        className={clsx(
          'w-full',
          'lg:w-1/4',
          'col-span-1',
          'col-start-1',
          'shadow-md',
          'h-full',
        )}
        {...{
          title,
          cover,
          subtitle,
          isbn,
          authors,
          publishers,
          languages,
          publishedAt,
          pages,
        }}
      />
      <div className={clsx('ml-0', 'lg:ml-4', 'flex-grow')}>
        <div className={clsx('grid', 'grid-cols-2', 'gap-4')}>
          {series.map((node) => (
            <SeriesSection
              key={node.id}
              {...node}
              className={clsx('col-span-full', 'shadow-md')}
            />
          ))}
          {authors.map((node) => (
            <AuthorsSection
              key={node.id}
              {...node}
              className={clsx('col-span-full', 'shadow-md')}
            />
          ))}
          {publishers.map((node) => (
            <PublishersSection
              key={node.id}
              {...node}
              className={clsx('col-span-full', 'shadow-md')}
            />
          ))}
        </div>
      </div>
    </div>
  </main>
);
