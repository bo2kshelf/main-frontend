import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Record} from '~/components/Record';

type ComponentProps = {
  className?: string;
  i18n: Record<'title', string>;
  records: {
    id: string;
    readAt?: string;
    user: {
      userName: string;
      picture: string;
      displayName: string;
    };
    book: {
      id: string;
      title: string;
      subtitle?: string;
      cover?: string;
    };
  }[];
  recordPageLink: string;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  i18n,
  records,
  recordPageLink,
}) => (
  <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
    <h1 className={clsx('text-xl')}>{i18n.title}</h1>
    <div className={clsx('mt-2', 'flex', 'flex-col', 'divide-y')}>
      {records.map((node: any) => (
        <Record className={clsx('w-full')} key={node.id} {...node} />
      ))}
    </div>
    <MoreLink className={clsx('mt-4', 'w-full')} href={recordPageLink} />
  </section>
);

export const MoreLink: React.FC<{
  className?: string;
  href: string;
}> = ({className, href}) => {
  const {t} = useTranslation();
  return (
    <Link href={href}>
      <a
        className={clsx(
          className,
          'block',
          'group',
          'py-4',
          'text-center',
          'bg-blue-400',
          'hover:bg-blue-500',
        )}
      >
        <span className={clsx('text-white')}>{t('もっと見る')}</span>
      </a>
    </Link>
  );
};
