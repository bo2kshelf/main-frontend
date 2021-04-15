import React from 'react';
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
export const Container: React.FC<ContainerProps> = ({records, ...props}) => {
  return (
    <Component {...props} records={records.nodes} hasMore={records.hasNext} />
  );
};
Container.displayName = 'RecordsSection';
