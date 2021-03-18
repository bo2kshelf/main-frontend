import React from 'react';

export type ContainerProps = Record<string, never>;
export const Container: React.FC<ContainerProps> = ({...props}) => {
  return <div />;
};
Container.displayName = 'LoginPage';
