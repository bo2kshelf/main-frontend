import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  detail: {
    key: string;
    value: string;
  };
  icon: IconProp;
};

export const Component: React.FC<ComponentProps> = ({
  className,
  detail: {key, value},
  icon,
}) => (
  <tr className={clsx(className)}>
    <td className={clsx('flex', 'items-center', 'px-2')}>
      <FontAwesomeIcon
        className={clsx('text-md', 'text-gray-500', 'mr-2')}
        icon={icon}
      />
      <span className={clsx('text-sm', 'select-none')}>{key}</span>
    </td>
    <td className={clsx('px-2')}>
      <span className={clsx('select-all')}>{value}</span>
    </td>
  </tr>
);
