import clsx from 'clsx';
import React from 'react';
import {InfinityScrollerDetector} from '~/components/InfiniteScroller/Detector';
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
  hasMoreRecords: boolean;
  fetchMoreRecords(): void;
  fetchRecordsLoading: boolean;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  i18n,
  fetchRecordsLoading: loading,
  hasMoreRecords: hasNext,
  fetchMoreRecords: fetchMore,
  records: nodes,
}) => (
  <section className={clsx(className, 'bg-white', 'py-6', 'px-12')}>
    <p className={clsx('text-xl')}>{i18n.title}</p>
    <div className={clsx('flex', 'flex-col', 'divide-y')}>
      {nodes.map((node: any) => (
        <Record className={clsx('w-full')} key={node.id} {...node} />
      ))}
      {hasNext && (
        <InfinityScrollerDetector
          className={clsx('w-full')}
          loading={loading}
          onClicked={fetchMore}
        />
      )}
    </div>
  </section>
);
