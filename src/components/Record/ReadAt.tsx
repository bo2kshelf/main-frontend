import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const ReadAt: React.FC<{className?: string; readAt?: string}> = ({
  className,
  readAt,
}) => {
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
