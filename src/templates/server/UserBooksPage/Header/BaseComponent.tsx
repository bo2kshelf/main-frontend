import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'message' | 'count', string>;
  isNone: boolean;
};

export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  isNone,
}) => (
  <header className={clsx(className, 'flex', 'items-center')}>
    <h1 className={clsx('text-xl')}>{i18n.message}</h1>
    {!isNone && (
      <span className={clsx('ml-2', 'text-sm', 'font-bold')}>{i18n.count}</span>
    )}
  </header>
);
