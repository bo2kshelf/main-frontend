import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkSeriesIndexPage} from '~/components/atoms/Link';

export type ComponentProps = {
  className?: string;
  name: string;
  series: {
    id: string;
    title: string;
  }[];
};
export const Component: React.FC<ComponentProps> = ({
  className,
  name,
  series,
}) => {
  const {t} = useTranslation();
  return (
    <nav className={clsx(className)}>
      <div className={clsx('px-6', 'py-4', 'bg-white')}>
        <h1 className={clsx('text-lg', 'font-bold')}>{name}</h1>
      </div>
      {series.length > 0 && (
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
          <h3 className={clsx('text-base')}>{t('関連のあるシリーズ')}</h3>
          <ul className={clsx('mt-2', 'w-full', 'space-y-1')}>
            {series.map(({id, title}) => (
              <li key={id}>
                <LinkSeriesIndexPage id={id}>
                  <span className={clsx('font-bold', 'text-sm')}>{title}</span>
                </LinkSeriesIndexPage>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
