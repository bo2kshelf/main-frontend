import React from 'react';
import {AuthorPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = AuthorPageQuery;
export const Container: React.FC<ContainerProps> = ({author, ...props}) => {
  return <Component {...props} />;
};
Container.displayName = 'AuthorPage';
