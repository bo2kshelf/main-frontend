import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'text', string>;
  Link: React.FC<{className?: string}>;
};
export const BaseComponent: React.VFC<BaseComponentProps> = ({
  className,
  i18n,
  Link,
}) => (
  <Link
    className={clsx(
      className,
      'bg-blue-400',
      'hover:bg-blue-500',
      'py-4',
      'text-white',
      'text-center',
    )}
  >
    <span>{i18n.text}</span>
  </Link>
);
