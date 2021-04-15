import clsx from 'clsx';
import React from 'react';
import {IconComponentType} from '~/components/atoms/Icon';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'key', string>;
  Icon: IconComponentType;
};

export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  children,
  i18n,
  Icon,
}) => (
  <tr className={clsx(className)}>
    <td className={clsx('flex', 'items-center', 'py-2', 'px-4', 'border')}>
      <Icon className={clsx('text-md', 'text-gray-400', 'mr-2')} />
      <span className={clsx('text-sm', 'select-none')}>{i18n.key}</span>
    </td>
    <td className={clsx('px-4', 'border')}>{children}</td>
  </tr>
);
