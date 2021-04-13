import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  userName: string;
};
export const MoreReadingBooks: React.FC<ContainerProps> = ({
  userName,
  ...props
}) => {
  return <Component {...props} href={`/users/${userName}/reading`} />;
};

export const MoreLikedBooks: React.FC<ContainerProps> = ({
  userName,
  ...props
}) => {
  return <Component {...props} href={`/users/${userName}/liked`} />;
};
