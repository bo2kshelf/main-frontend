import clsx from 'clsx';
import React from 'react';
import {LinkLoginPage} from '~/atoms/Link';

export type BaseComponentProps = {
  className?: string;
  i18n: {login: string};
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
}) => (
  <LinkLoginPage className={clsx(className)}>
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
  </LinkLoginPage>
);
