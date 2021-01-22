import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  link: string;
  icon: IconProp;
  text: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  link,
  icon,
  text,
}) => (
  <NextLink href={link}>
    <a
      className={clsx(
        className,
        'hover:bg-blue-50',
        'px-4',
        'py-3',
        'flex',
        'items-center',
      )}
    >
      <FontAwesomeIcon
        className={clsx('text-sm', 'mr-2', 'text-gray-400')}
        icon={icon}
        fixedWidth
      />
      <span className={clsx('text-sm')}>{text}</span>
    </a>
  </NextLink>
);
