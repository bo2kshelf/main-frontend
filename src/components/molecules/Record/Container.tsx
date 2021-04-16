import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  record: {
    id: string;
    readAt?: string;
    user: {userName: string; picture: string; displayName: string};
    book: {id: string; title: string; subtitle?: string; cover?: string};
  };
};

export const Container: React.FC<ContainerProps> = ({record, ...props}) => {
  return <Component {...props} {...record} />;
};
