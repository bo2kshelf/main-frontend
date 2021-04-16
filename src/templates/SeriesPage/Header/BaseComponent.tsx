import clsx from 'clsx';
import React from 'react';
import {LinkAuthorsIndexPage} from '~/components/atoms/Link';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'relatedAuthors', string>;
  title: string;
  relatedAuthors: {id: string; name: string}[];
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
        {relatedAuthors.map(({id, name}) => (
          <LinkAuthorsIndexPage key={id} id={id} className={clsx('font-bold')}>
            {name}
          </LinkAuthorsIndexPage>
        ))}
      </div>
    </div>
  </header>
);
