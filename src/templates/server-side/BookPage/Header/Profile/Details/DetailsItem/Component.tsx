import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  detailKey: string;
  detailValue: string;
  icon: IconProp;
};

export const Component: React.FC<ComponentProps> = ({
  className,
  detailKey: key,
  detailValue: value,
  icon,
}) => (
  <tr className={clsx(className)}>
    <td className={clsx('flex', 'items-center', 'py-2', 'px-4', 'border')}>
      <FontAwesomeIcon
        className={clsx('text-md', 'text-gray-400', 'mr-2')}
        fixedWidth
        icon={icon}
      />
      <span className={clsx('text-sm', 'select-none')}>{key}</span>
    </td>
    <td className={clsx('px-4', 'border')}>
      <span className={clsx('select-all')}>{value}</span>
    </td>
  </tr>
);
