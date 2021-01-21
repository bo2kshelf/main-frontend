import React from 'react';
import {useHeaderNavUserInfoQuery} from '~/_generated/apollo';
import {Component} from './Component';

export type ContainerProps = {className?: string};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const {data, loading} = useHeaderNavUserInfoQuery();

  return <Component {...props} loading={loading} data={data?.currentUser} />;
};
