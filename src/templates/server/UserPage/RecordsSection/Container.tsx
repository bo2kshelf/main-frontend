import clsx from 'clsx';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useMoreRecordsInUserPageLazyQuery} from '~/graphql/codegen/apollo';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  userName: string;
  displayName: string;
  records: {
    count: number;
    hasNext: boolean;
    skip: number;
    limit: number;
    nodes: {
      id: string;
      readAt?: string;
      user: {userName: string; picture: string; displayName: string};
      book: {id: string; title: string; subtitle?: string; cover?: string};
    }[];
  };
};
export const Container: React.FC<ContainerProps> = ({
  className,
  userName,
  displayName,
  records: givenRecords,
}) => {
  const {t} = useTranslation();
  const [records, setRecords] = useState(givenRecords.nodes);
  const [hasNext, sethasNext] = useState(givenRecords.hasNext);
  const [getMoreRecords, {loading, data}] = useMoreRecordsInUserPageLazyQuery();

  useEffect(() => {
    if (!loading && data) {
      setRecords((previous) => [
        ...previous,
        ...data.user.records.nodes.map(({id, readAt, book, user}) => ({
          id,
          readAt,
          user: {
            userName: user.userName,
            displayName: user.displayName,
            picture: user.picture,
          },
          book: {
            id: book.id,
            title: book.title,
            subtitle: book.subtitle || undefined,
            cover: book.cover || undefined,
          },
        })),
      ]);
      sethasNext(data.user.records.hasNext);
    }
  }, [loading, data]);

  const fetchMore = () => {
    if (!loading && hasNext)
      getMoreRecords({
        variables: {
          userName,
          skip: records.length,
          limit: givenRecords.limit,
        },
      });
  };

  return (
    <Component
      className={clsx(className)}
      i18n={{title: t('{{name}}による記録', {name: displayName})}}
      records={records}
      hasMoreRecords={hasNext}
      fetchRecordsLoading={loading}
      fetchMoreRecords={fetchMore}
    />
  );
};
Container.displayName = 'RecordsSection';
