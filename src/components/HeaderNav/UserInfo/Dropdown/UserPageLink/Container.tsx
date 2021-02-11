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
  account: {userName: string};
};

export const ReadBooksLink: React.FC<ContainerProps> = ({
  account,
  ...props
}) => {
  return (
    <ReadBooksLinkComponent
      {...props}
      link={{
        pathname: '/users/[username]/read',
        query: {username: account.userName},
      }}
    />
  );
};

export const ReadingBooksLink: React.FC<ContainerProps> = ({
  account,
  ...props
}) => {
  return (
    <ReadingBooksLinkComponent
      {...props}
      link={{
        pathname: '/users/[username]/reading',
        query: {username: account.userName},
      }}
    />
  );
};

export const WishReadBooksLink: React.FC<ContainerProps> = ({
  account,
  ...props
}) => {
  return (
    <WishReadBooksLinkComponent
      {...props}
      link={{
        pathname: '/users/[username]/wish',
        query: {username: account.userName},
      }}
    />
  );
};

export const StackedBooksLink: React.FC<ContainerProps> = ({
  account,
  ...props
}) => {
  return (
    <StackedBooksLinkComponent
      {...props}
      link={{
        pathname: '/users/[username]/stacked',
        query: {username: account.userName},
      }}
    />
  );
};

export const HaveBooksList: React.FC<ContainerProps> = ({
  account,
  ...props
}) => {
  return (
    <HaveBooksLinkComponent
      {...props}
      link={{
        pathname: '/users/[username]/have',
        query: {username: account.userName},
      }}
    />
  );
};
