import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  href: string;
  icon: IconDefinition;
  i18n: Record<'text' | 'count', string>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  href,
  i18n,
  icon,
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
        <FontAwesomeIcon
          className={clsx('text-gray-500', 'group-hover:text-white')}
          icon={icon}
          fixedWidth
        />
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
