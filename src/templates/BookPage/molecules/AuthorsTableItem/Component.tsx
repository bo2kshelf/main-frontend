import clsx from 'clsx';
import React from 'react';
import {LinkAuthorsIndexPage} from '~/components/atoms/Link';

export type ComponentProps = {
  className?: string;
  id: string;
  name: string;
};
export const Component: React.VFC<ComponentProps> = ({name, id, className}) => (
  <span className={clsx(className)}>
    <LinkAuthorsIndexPage id={id}>{name}</LinkAuthorsIndexPage>
  </span>
);
