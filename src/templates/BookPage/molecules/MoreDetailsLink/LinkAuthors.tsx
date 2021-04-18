import React from 'react';
import {LinkAuthorsIndexPage} from '~/components/atoms/Link';
import {ComponentBase} from './ComponentBase';

export type ComponentProps = {
  className?: string;
  id: string;
};

export const Component: React.VFC<ComponentProps> = ({id, ...props}) => (
  <ComponentBase
    {...props}
    Link={(props) => <LinkAuthorsIndexPage id={id} {...props} />}
  />
);
