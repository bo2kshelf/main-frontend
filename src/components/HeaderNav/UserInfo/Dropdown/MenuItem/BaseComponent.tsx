import clsx from 'clsx';
import React from 'react';
import {IconComponentType} from '~/atoms/Icon';
import {LinkMeHavePage} from '~/atoms/Link';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'text', string>;
  Link: typeof LinkMeHavePage;
  Icon: IconComponentType;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  Link,
  Icon,
}) => (
  <Link
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
    <Icon
      className={clsx(
        'text-xs',
        'mr-2',
        'text-gray-400',
        'group-hover:text-white',
      )}
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
  </Link>
);
