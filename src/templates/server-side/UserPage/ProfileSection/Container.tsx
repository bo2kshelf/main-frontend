import React from 'react';
import {PlainComponent} from './Component';

export type ContainerProps = {
  className?: string;
  user: {
    picture: string;
    userName: string;
    displayName: string;
  };
};
export const Container: React.FC<ContainerProps> = ({user, ...props}) => {
  return <PlainComponent {...props} {...user} />;
};
Container.displayName = 'ProfileSection';
