import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentProps = {
  className?: string;
  date: string;
};
export const Component: React.FC<ComponentProps> = ({className, date}) => {
  const {t} = useTranslation();
  return (
    <time className={clsx(className)}>
      {t('format:record_date', {date: new Date(date)})}
    </time>
  );
};
