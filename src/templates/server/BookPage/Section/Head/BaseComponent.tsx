import clsx from 'clsx';
import NextLink, {LinkProps} from 'next/link';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'title', string>;
  link: LinkProps['href'];
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  link,
  i18n,
}) => (
  <div className={clsx(className)}>
    <NextLink href={link}>
      <a>
        <h2 className={clsx('text-2xl')}>{i18n.title}</h2>
      </a>
    </NextLink>
  </div>
);
