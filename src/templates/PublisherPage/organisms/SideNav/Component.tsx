import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type ComponentProps = {
  className?: string;
  name: string;
};
export const Component: React.FC<ComponentProps> = ({className, name}) => {
  const {t} = useTranslation();
  return (
    <nav className={clsx(className)}>
      <div className={clsx('px-6', 'py-4', 'bg-white')}>
        <h1 className={clsx('text-lg', 'font-bold')}>{name}</h1>
      </div>
    </nav>
  );
};
