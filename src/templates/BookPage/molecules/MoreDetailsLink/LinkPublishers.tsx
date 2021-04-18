import React from 'react';
import {LinkPublishersIndexPage} from '~/components/atoms/Link';
import {ComponentBase} from './ComponentBase';

export type ComponentProps = {
  className?: string;
  id: string;
};

export const Component: React.VFC<ComponentProps> = ({id, ...props}) => (
  <ComponentBase
    {...props}
    Link={(props) => <LinkPublishersIndexPage id={id} {...props} />}
  />
);
