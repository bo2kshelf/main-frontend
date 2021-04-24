import React from 'react';
import {
  LinkUsersStackedIndexPage,
  LinkUsersStackedNumberedPage,
} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';
import {switcher} from './switcher';

export type ComponentProps = {
  className?: string;
  userName: string;
  leftest: boolean;
  left?: number;
  right?: number;
  rightest?: number;
};
export const Component: React.FC<ComponentProps> = ({userName, ...props}) => {
  return (
    <BaseComponent
      {...props}
      IndexLink={({...props}) => (
        <LinkUsersStackedIndexPage {...props} username={userName} />
      )}
      NumberedLink={({...props}) => (
        <LinkUsersStackedNumberedPage {...props} username={userName} />
      )}
    />
  );
};

export type ContainerProps = {
  className?: string;
  userName: string;
  pageNumber: number;
  pagesCount: number;
};
export const Container: React.FC<ContainerProps> = ({
  pageNumber,
  pagesCount,
  ...props
}) => {
  return <Component {...props} {...{...switcher({pageNumber, pagesCount})}} />;
};
