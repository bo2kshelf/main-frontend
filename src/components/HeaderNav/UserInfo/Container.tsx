import React, {useContext} from 'react';
import {CurrentUserContext} from '~/lib/current-user-provider';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {isLoading: loading, currentUser} = useContext(CurrentUserContext);

  return <Component {...props} loading={loading} data={currentUser} />;
};
