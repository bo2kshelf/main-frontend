import clsx from 'clsx';
import React from 'react';
import {IconISBN} from '~/components/atoms/Icon/Component';

export type ComponentBaseProps = {
  className?: string;
  Icon: typeof IconISBN;
  i18n: Record<'key', string>;
};
export const ComponentBase: React.FC<ComponentBaseProps> = ({
  className,
  Icon,
  children,
  i18n,
}) => (
  <tr className={clsx(className, 'py-1')}>
    <td className={clsx('inline-flex', 'items-center', 'select-none')}>
      <Icon className={clsx('text-gray-400', 'text-sm')} />
      <span className={clsx('ml-2', 'text-gray-600', 'text-sm')}>
        {i18n.key}
      </span>
    </td>
    <td>
      <span className={clsx('text-sm')}>{children}</span>
    </td>
  </tr>
);
