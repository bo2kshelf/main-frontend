import clsx from 'clsx';
import React from 'react';
import {List, ListProps} from './List';

export type BaseComponentProps = {
  className?: string;
  books: ListProps['books'];
  i18n: {
    title: string;
  };
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  books,
}) => (
  <div className={clsx(className)}>
    <div className={clsx('w-full', 'max-w-screen-xl', 'mx-auto', 'mb-4')}>
      <h2 className={clsx('text-2xl')}>{i18n.title}</h2>
    </div>
    <List books={books} />
  </div>
);
