import React from 'react';
import {Component, ComponentProps} from './Component';

export type ContainerProps = Omit<ComponentProps, 'link'>;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <Component {...props} link={`/users/${props.userName}`} />;
};
Container.displayName = 'Profile';
