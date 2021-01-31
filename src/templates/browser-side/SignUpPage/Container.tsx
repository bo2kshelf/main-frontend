import React from 'react';
import {Component} from './Component';

export type ContainerProps = {
  currentUser: {
    id: string;
    github: {displayName: string; userName: string; picture: string} | null;
  };
};
export const Container: React.FC<ContainerProps> = ({
  currentUser: {github, id: userId},
  ...props
}) => {
  return (
    <Component
      {...props}
      userId={userId}
      initialValues={{
        userName: github?.userName,
        displayName: github?.displayName,
        picture: github?.picture,
      }}
    />
  );
};
