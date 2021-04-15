import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  type: 'Previous' | 'Next';
  i18n: Record<'text', string>;
  link: {pathname: string; query: {username: string; number?: number}};
  icon: IconProp;
};

export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  link,
  type,
  icon,
}) => (
  <>
    {link && (
      <NextLink href={link}>
        <a
          className={clsx(
            className,
            'hover:bg-gray-200',
            'flex',
            {'flex-row-reverse': type === 'Next'},
            'justify-center',
            'items-center',
            'py-2',
          )}
        >
          <div
            className={clsx({
              'pr-4': type === 'Previous',
              'pl-4': type === 'Next',
            })}
          >
            <FontAwesomeIcon icon={icon} fixedWidth />
          </div>
          <span>{i18n.text}</span>
        </a>
      </NextLink>
    )}
  </>
);
