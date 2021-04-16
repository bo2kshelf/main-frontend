import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentProps = {
  className?: string;
  readAt?: string;
};
export const Component: React.FC<ComponentProps> = ({className, readAt}) => {
  const {t} = useTranslation();
  return (
    <time className={clsx(className)}>
      {t('format:record_date', {
        date: readAt ? new Date(readAt) : undefined,
        context: readAt ? undefined : 'unknown',
      })}
    </time>
  );
};
