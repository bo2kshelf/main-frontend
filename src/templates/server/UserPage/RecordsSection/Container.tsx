import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
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
  records: {nodes},
}) => {
  const {t} = useTranslation();
  return (
    <Component
      className={clsx(className)}
      i18n={{
        title: t('{{name}}による最近の記録', {name: displayName}),
      }}
      records={nodes}
      recordPageLink={`/users/${userName}/records`}
    />
  );
};
Container.displayName = 'RecordsSection';
