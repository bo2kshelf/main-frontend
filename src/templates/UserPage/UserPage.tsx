import React from 'react';
import {UserPageQuery} from '~/_generated/graphql-request';

export type ContainerProps = UserPageQuery;
export const Container: React.FC<ContainerProps> = ({req, res, ...props}) => {
  return <main />;
};
