import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  active: boolean;
  Icon: React.VFC<{className?: string}>;
};
export const BaseComponent: React.VFC<BaseComponentProps> = ({
  className,
  active,
  Icon,
}) => {
  return (
    <div
      className={clsx(
        className,
        'px-3',
        'py-2',
        'flex',
        'justify-center',
        'items-center',
        'rounded-md',
        {
          'bg-blue-400': active,
          'hover:bg-blue-500': active,
          'bg-gray-200': !active,
        },
      )}
    >
      <Icon className={clsx('text-white')} />
    </div>
  );
};
