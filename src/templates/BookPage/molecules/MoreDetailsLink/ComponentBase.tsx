import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentBaseProps = {
  className?: string;
  Link: React.FC<{className?: string}>;
};

export const ComponentBase: React.FC<ComponentBaseProps> = ({
  Link,
  className,
}) => {
  const {t} = useTranslation();
  return (
    <Link
      className={clsx(
        className,
        'py-1',
        'px-3',
        'text-sm',
        'rounded-lg',
        'text-white',
        'bg-blue-400',
        'hover:bg-blue-500',
        'whitespace-nowrap',
      )}
    >
      {t('詳細を見る')}
    </Link>
  );
};
