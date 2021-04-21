import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {Layout} from '~/components/atoms/Layout';
import {
  SectionAuthors,
  SectionPublishers,
  SectionSeries,
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
    <Layout
      Side={({className, ...props}) => (
        <SideNav
          {...props}
          className={clsx(className, 'shadow-md')}
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
      )}
      Main={({className, ...props}) => (
        <div
          {...props}
          className={clsx(className, 'grid', 'grid-cols-2', 'gap-4')}
        >
          {series.map((node) => (
            <SectionSeries
              key={node.id}
              {...node}
              className={clsx('col-span-full', 'shadow-md')}
            />
          ))}
          {authors.map((node) => (
            <SectionAuthors
              key={node.id}
              {...node}
              className={clsx('col-span-full', 'shadow-md')}
            />
          ))}
          {publishers.map((node) => (
            <SectionPublishers
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
