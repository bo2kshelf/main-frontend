import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Record} from '~/components/molecules/Record';
import {MoreLink} from '../../molecules/MoreRecordsLink';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'title' | 'titleEmpty', string>;
  userName: string;
  records: {
    id: string;
    readAt?: string;
    user: {userName: string; picture: string; displayName: string};
    book: {id: string; title: string; subtitle?: string; cover?: string};
  }[];
  hasMore: boolean;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  records,
  userName,
  hasMore,
}) => (
  <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
    <h2 className={clsx('text-xl')}>
      {records.length > 0 && i18n.title}
      {records.length === 0 && i18n.titleEmpty}
    </h2>
    <div className={clsx('mt-2', 'flex', 'flex-col', 'divide-y')}>
      {records.map((node: any) => (
        <Record className={clsx('w-full')} key={node.id} {...node} />
      ))}
    </div>
    {hasMore && (
      <MoreLink className={clsx('mt-4', 'w-full')} userName={userName} />
    )}
  </section>
);

export type ComponentProps = {
  className?: string;
  userName: string;
  displayName: string;
  records: BaseComponentProps['records'];
  hasMore: boolean;
};
export const Component: React.FC<ComponentProps> = ({
  displayName,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        title: t('{{name}}による最近の記録', {
          name: displayName,
        }),
        titleEmpty: t('{{name}}による最近の記録はありません', {
          name: displayName,
        }),
      }}
    />
  );
};
