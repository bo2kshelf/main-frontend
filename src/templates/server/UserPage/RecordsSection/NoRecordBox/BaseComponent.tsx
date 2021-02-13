import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'noRecord', string>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
}) => (
  <div
    className={clsx(
      className,
      'bg-gray-200',
      'flex',
      'items-center',
      'justify-center',
    )}
  >
    <p className={clsx('text-xl', 'text-gray-400', 'font-bold')}>
      {i18n.noRecord}
    </p>
  </div>
);
