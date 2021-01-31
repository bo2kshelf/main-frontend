import React from 'react';
import {LoginPageQuery} from '~/_generated/graphql-request';
import {Component} from './Component';

export type ContainerProps = LoginPageQuery;
export const Container: React.FC<ContainerProps> = ({
  loginGitHubUrl,
  ...props
}) => {
  return <Component {...props} loginUrls={{github: loginGitHubUrl}} />;
};
Container.displayName = 'LoginPage';
