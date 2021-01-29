import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  i18n: {login: string};
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
}) => (
  <div className={clsx(className)}>
    <NextLink href="/login">
      <a>
        <button
          type="button"
          className={clsx(
            'py-2',
            'px-4',
            'rounded',
            'bg-blue-400',
            'text-white',
            'font-bold',
          )}
        >
          {i18n.login}
        </button>
      </a>
    </NextLink>
  </div>
);
