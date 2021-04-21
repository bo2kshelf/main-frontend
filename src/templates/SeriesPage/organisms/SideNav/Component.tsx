import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkAuthorsIndexPage} from '~/components/atoms/Link';

export type ComponentProps = {
  className?: string;
  title: string;
  authors: {id: string; name: string}[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  title,
  authors,
}) => {
  const {t} = useTranslation();
  return (
    <nav className={clsx(className)}>
      <div className={clsx('px-6', 'py-4', 'bg-white')}>
        <h1 className={clsx('text-lg', 'font-bold')}>{title}</h1>
      </div>
      {authors.length > 0 && (
        <div
          className={clsx(
            'w-full',
            'px-6',
            'py-4',
            'bg-white',
            'border-t',
            'border-gray-100',
          )}
        >
          <h3 className={clsx('text-base')}>{t('関連のある作者')}</h3>
          <ul className={clsx('mt-2', 'w-full', 'space-y-1')}>
            {authors.map(({id, name}) => (
              <li key={id}>
                <LinkAuthorsIndexPage id={id}>
                  <span className={clsx('font-bold', 'text-sm')}>{name}</span>
                </LinkAuthorsIndexPage>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
