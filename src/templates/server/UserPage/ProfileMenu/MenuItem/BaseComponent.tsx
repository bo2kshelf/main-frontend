import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';
import {IconComponentType} from '~/atoms/Icon';

export type BaseComponentProps = {
  className?: string;
  href: string;
  icon: IconComponentType;
  i18n: Record<'text' | 'count', string>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  href,
  i18n,
  icon: Icon,
}) => {
  return (
    <NextLink href={href} passHref>
      <a
        className={clsx(
          className,
          'block',
          'py-4',
          'px-8',
          'bg-white',
          'hover:bg-blue-400',
          'group',
          'flex',
          'items-center',
        )}
      >
        <Icon className={clsx('text-gray-500', 'group-hover:text-white')} />
        <span
          className={clsx(
            'flex-grow',
            'ml-6',
            'text-keft',
            'group-hover:text-white',
          )}
        >
          {i18n.text}
        </span>
        <span
          className={clsx(
            'text-gray-400',
            'group-hover:text-white',
            'text-right',
            'font-mono',
          )}
        >
          {i18n.count}
        </span>
      </a>
    </NextLink>
  );
};
