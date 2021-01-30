import clsx from 'clsx';
import React from 'react';
import {Component} from './Component';
import {GitHubButton} from './LoginButton';

export type ContainerProps = {
  className?: string;
  loginUrls: {
    github: string;
  };
};
export const Container: React.FC<ContainerProps> = ({
  loginUrls: {github},
  ...props
}) => {
  return (
    <Component {...props} githubUrl={github}>
      <GitHubButton className={clsx('w-full')} url={github} />
    </Component>
  );
};
Container.displayName = 'LoginFormButton';
