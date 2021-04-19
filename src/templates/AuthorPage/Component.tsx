import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {SeriesSection} from '../BookPage/organisms/Section';
import {AllBooksSection} from './AllBooksSection';
import {TransformedProps} from './transform';

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const Component: React.FC<ComponentProps> = ({
  className,
  children,
  name,
  books,
  series,
}) => (
  <main className={clsx(className, 'space-y-8')}>
    {children}
    <AllBooksSection author={{name}} className={clsx('w-full')} books={books} />
    {series.map((node) => (
      <SeriesSection className={clsx('w-full')} key={node.id} {...node} />
    ))}
  </main>
);
