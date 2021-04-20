import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';
import {SectionBooks} from './Section';
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
    <SectionBooks className={clsx('w-full')} {...{id, name, books}} />
  </main>
);
