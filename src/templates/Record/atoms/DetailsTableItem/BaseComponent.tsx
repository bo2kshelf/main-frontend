import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  Icon: React.VFC<{className?: string}>;
  i18n: {title: string};
  Body: React.VFC<{className?: string}>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  Icon,
  i18n,
  Body,
}) => (
  <tr className={clsx(className)}>
    <td className={clsx('select-none')}>
      <div className={clsx('flex', 'items-center')}>
        <Icon className={clsx('text-gray-400', 'text-sm')} />
        <span
          className={clsx(
            'ml-2',
            'text-gray-600',
            'whitespace-nowrap',
            'text-sm',
          )}
        >
          {i18n.title}
        </span>
      </div>
    </td>
    <td className={clsx('pl-4', 'py-0.5')}>
      <Body className={clsx('text-sm')} />
    </td>
  </tr>
);
