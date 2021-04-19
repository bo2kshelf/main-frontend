import React from 'react';
import {LinkSeriesIndexPage} from '~/components/atoms/Link';
import {ComponentBase} from './ComponentBase';

export type ComponentProps = {
  className?: string;
  id: string;
};

export const Component: React.VFC<ComponentProps> = ({id, ...props}) => (
  <ComponentBase
    {...props}
    Link={(props) => <LinkSeriesIndexPage id={id} {...props} />}
  />
);
