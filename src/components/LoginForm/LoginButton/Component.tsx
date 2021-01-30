import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type ComponentProps = {
  className?: string;
  icon: IconProp;
  provider: string;
  url: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  icon,
  provider,
  url,
}) => (
  <NextLink href={url} passHref>
    <a
      className={clsx(
        className,
        'group',
        'text-white',
        'grid',
        'grid-cols-3',
        'rounded-lg',
      )}
    >
      <div
        className={clsx('col-span-1', 'flex', 'items-center', 'justify-center')}
      >
        <FontAwesomeIcon className={clsx('text-xl')} fixedWidth icon={icon} />
      </div>
      <div
        className={clsx(
          'col-start-2',
          'col-span-full',
          'flex',
          'items-center',
          'justify-center',
          'py-3',
          'bg-white',
          'bg-opacity-10',
          'group-hover:bg-opacity-20',
        )}
      >
        <span className={clsx('font-bold', 'text-sm', 'tracking-wide')}>
          {provider}
        </span>
      </div>
    </a>
  </NextLink>
);
