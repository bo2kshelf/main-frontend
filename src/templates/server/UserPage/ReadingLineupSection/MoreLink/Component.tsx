import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'text', string>;
  href: string;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  href,
}) => (
  <Link href={href}>
    <a
      className={clsx(
        className,
        'py-1',
        'px-3',
        'text-sm',
        'rounded-lg',
        'text-white',
        'bg-blue-400',
        'hover:bg-blue-500',
        'whitespace-nowrap',
      )}
    >
      {i18n.text}
    </a>
  </Link>
);

export type ComponentProps = {
  className?: string;
  href: string;
};
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return <BaseComponent {...props} i18n={{text: t('もっと見る')}} />;
};
