import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  userName: string;
  displayName: string;
  count: number;
  pageNumber: number;
  hasNext: boolean;
  records: {
    id: string;
    readAt?: string;
    user: {userName: string; picture: string; displayName: string};
    book: {id: string; title: string; subtitle?: string; cover?: string};
  }[];
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} {...{hasPrevious: props.pageNumber > 1}} />;
};
Container.displayName = 'RecordsSection';
