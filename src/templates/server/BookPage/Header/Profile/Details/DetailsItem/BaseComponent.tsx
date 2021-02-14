import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'key', string>;
  icon: IconProp;
};

export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  children,
  i18n,
  icon,
}) => (
  <tr className={clsx(className)}>
    <td className={clsx('flex', 'items-center', 'py-2', 'px-4', 'border')}>
      <FontAwesomeIcon
        className={clsx('text-md', 'text-gray-400', 'mr-2')}
        fixedWidth
        icon={icon}
      />
      <span className={clsx('text-sm', 'select-none')}>{i18n.key}</span>
    </td>
    <td className={clsx('px-4', 'border')}>{children}</td>
  </tr>
);
