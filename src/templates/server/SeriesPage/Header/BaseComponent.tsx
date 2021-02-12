import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'relatedAuthors', string>;
  title: string;
  relatedAuthors: {
    author: {id: string; name: string};
  }[];
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  title,
  i18n,
  relatedAuthors,
}) => (
  <header className={clsx(className)}>
    <h1 className={clsx('text-2xl', 'select-all')}>{title}</h1>
    <div className={clsx('w-full', 'mt-4')}>
      <p className={clsx('text-sm', 'text-gray-500')}>{i18n.relatedAuthors}</p>
      <div className={clsx('mt-1', 'flex', 'space-x-2')}>
        {relatedAuthors.map(({author: {id, name}}) => (
          <Link key={id} href={{pathname: '/authors/[id]', query: {id}}}>
            <a className={clsx('font-bold')}>{name}</a>
          </Link>
        ))}
      </div>
    </div>
  </header>
);
