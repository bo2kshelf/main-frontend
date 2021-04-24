import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentProps = {
  className?: string;

  pageNumber: number;
  pagesCount: number;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  pageNumber: number,
  pagesCount: count,
}) => {
  const {t} = useTranslation();

  return (
    <div className={clsx(className, 'flex', 'justify-end', 'items-center')}>
      <span className={clsx('text-sm', 'text-gray-500')}>
        {t('{{count}}ページ中の{{number}}ページ目を表示中', {count, number})}
      </span>
    </div>
  );
};
