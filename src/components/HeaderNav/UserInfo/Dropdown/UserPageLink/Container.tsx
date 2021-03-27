import React from 'react';
import {
  HaveBooksLinkComponent,
  ReadBooksLinkComponent,
  ReadingBooksLinkComponent,
  StackedBooksLinkComponent,
  WishReadBooksLinkComponent,
} from './Component';

export type ContainerProps = {
  className?: string;
  user: {userName: string};
};

export const ReadBooksLink: React.FC<ContainerProps> = ({
  user: account,
  ...props
}) => {
  return (
    <ReadBooksLinkComponent
      {...props}
      link={{
        pathname: '/me/read',
      }}
    />
  );
};

export const ReadingBooksLink: React.FC<ContainerProps> = ({
  user: account,
  ...props
}) => {
  return (
    <ReadingBooksLinkComponent
      {...props}
      link={{
        pathname: '/me/reading',
      }}
    />
  );
};

export const WishReadBooksLink: React.FC<ContainerProps> = ({
  user: account,
  ...props
}) => {
  return (
    <WishReadBooksLinkComponent
      {...props}
      link={{
        pathname: '/me/wish',
      }}
    />
  );
};

export const StackedBooksLink: React.FC<ContainerProps> = ({
  user: account,
  ...props
}) => {
  return (
    <StackedBooksLinkComponent
      {...props}
      link={{
        pathname: '/me/stacked',
      }}
    />
  );
};

export const HaveBooksList: React.FC<ContainerProps> = ({
  user: account,
  ...props
}) => {
  return (
    <HaveBooksLinkComponent
      {...props}
      link={{
        pathname: '/me/have',
      }}
    />
  );
};
