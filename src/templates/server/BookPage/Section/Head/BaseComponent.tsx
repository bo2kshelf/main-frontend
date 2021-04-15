import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'title', string>;
  Link: React.FC<{className?: string}>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  Link,
  i18n,
}) => (
  <Link className={clsx(className)}>
    <h2 className={clsx('text-2xl')}>{i18n.title}</h2>
  </Link>
);
