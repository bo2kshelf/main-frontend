import React from 'react';
import {UserPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = UserPageQuery;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} user={props.user} />;
};
Container.displayName = 'UserPage';
