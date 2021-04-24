import clsx from 'clsx';
import React from 'react';
import {IconLeft} from '~/components/atoms/Icon';
import {
  LinkUsersHaveIndexPage,
  LinkUsersHaveNumberedPage,
  LinkUsersReadIndexPage,
  LinkUsersReadingIndexPage,
  LinkUsersReadingNumberedPage,
  LinkUsersReadNumberedPage,
  LinkUsersStackedIndexPage,
  LinkUsersStackedNumberedPage,
  LinkUserWishIndexPage,
  LinkUserWishNumberedPage,
} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  active: boolean;
};
export const Component: React.VFC<ComponentProps> = ({...props}) => {
  return (
    <BaseComponent {...props} Icon={({...props}) => <IconLeft {...props} />} />
  );
};

export type ContainerProps = {
  className?: string;
  userName: string;
  number?: number;
};
export const ContainerHave: React.VFC<ContainerProps> = ({
  className,
  ...props
}) => {
  const Link: React.FC<{
    className?: string;
    userName: string;
    number?: number;
  }> = ({className, children, userName, number}) => {
    if (number)
      return number === 1 ? (
        <LinkUsersHaveIndexPage className={clsx(className)} username={userName}>
          {children}
        </LinkUsersHaveIndexPage>
      ) : (
        <LinkUsersHaveNumberedPage
          className={clsx(className)}
          username={userName}
          number={number}
        >
          {children}
        </LinkUsersHaveNumberedPage>
      );
    else return <div className={clsx(className)}>{children}</div>;
  };

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={Boolean(props.number)} />
    </Link>
  );
};

export const ContainerRead: React.VFC<ContainerProps> = ({
  className,
  ...props
}) => {
  const Link: React.FC<{
    className?: string;
    userName: string;
    number?: number;
  }> = ({className, children, userName, number}) => {
    if (number)
      return number === 1 ? (
        <LinkUsersReadIndexPage className={clsx(className)} username={userName}>
          {children}
        </LinkUsersReadIndexPage>
      ) : (
        <LinkUsersReadNumberedPage
          className={clsx(className)}
          username={userName}
          number={number}
        >
          {children}
        </LinkUsersReadNumberedPage>
      );
    else return <div className={clsx(className)}>{children}</div>;
  };

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={Boolean(props.number)} />
    </Link>
  );
};

export const ContainerReading: React.VFC<ContainerProps> = ({
  className,
  ...props
}) => {
  const Link: React.FC<{
    className?: string;
    userName: string;
    number?: number;
  }> = ({className, children, userName, number}) => {
    if (number)
      return number === 1 ? (
        <LinkUsersReadingIndexPage
          className={clsx(className)}
          username={userName}
        >
          {children}
        </LinkUsersReadingIndexPage>
      ) : (
        <LinkUsersReadingNumberedPage
          className={clsx(className)}
          username={userName}
          number={number}
        >
          {children}
        </LinkUsersReadingNumberedPage>
      );
    else return <div className={clsx(className)}>{children}</div>;
  };

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={Boolean(props.number)} />
    </Link>
  );
};

export const ContainerStacked: React.VFC<ContainerProps> = ({
  className,
  ...props
}) => {
  const Link: React.FC<{
    className?: string;
    userName: string;
    number?: number;
  }> = ({className, children, userName, number}) => {
    if (number)
      return number === 1 ? (
        <LinkUsersStackedIndexPage
          className={clsx(className)}
          username={userName}
        >
          {children}
        </LinkUsersStackedIndexPage>
      ) : (
        <LinkUsersStackedNumberedPage
          className={clsx(className)}
          username={userName}
          number={number}
        >
          {children}
        </LinkUsersStackedNumberedPage>
      );
    else return <div className={clsx(className)}>{children}</div>;
  };

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={Boolean(props.number)} />
    </Link>
  );
};

export const ContainerWishRead: React.VFC<ContainerProps> = ({
  className,
  ...props
}) => {
  const Link: React.FC<{
    className?: string;
    userName: string;
    number?: number;
  }> = ({className, children, userName, number}) => {
    if (number)
      return number === 1 ? (
        <LinkUserWishIndexPage className={clsx(className)} username={userName}>
          {children}
        </LinkUserWishIndexPage>
      ) : (
        <LinkUserWishNumberedPage
          className={clsx(className)}
          username={userName}
          number={number}
        >
          {children}
        </LinkUserWishNumberedPage>
      );
    else return <div className={clsx(className)}>{children}</div>;
  };

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={Boolean(props.number)} />
    </Link>
  );
};
