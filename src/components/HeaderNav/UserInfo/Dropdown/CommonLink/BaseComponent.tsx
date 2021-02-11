import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink, {LinkProps} from 'next/link';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  link: LinkProps['href'];
  icon: IconProp;
  i18n: Record<'text', string>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  link,
  icon,
  i18n,
}) => (
  <NextLink href={link}>
    <a
      className={clsx(
        className,
        'group',
        'bg-white',
        'hover:bg-blue-500',
        'bg-opacity-90',
        'hover:bg-opacity-80',
        'px-4',
        'py-3',
        'flex',
        'items-center',
      )}
    >
      <FontAwesomeIcon
        className={clsx(
          'text-xs',
          'mr-2',
          'text-gray-400',
          'group-hover:text-white',
        )}
        icon={icon}
        fixedWidth
      />
      <span
        className={clsx(
          'flex-grow',
          'text-sm',
          'whitespace-nowrap',
          'text-black',
          'group-hover:text-white',
        )}
      >
        {i18n.text}
      </span>
    </a>
  </NextLink>
);
