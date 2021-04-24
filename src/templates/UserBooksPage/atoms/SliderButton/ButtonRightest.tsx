import clsx from 'clsx';
import React from 'react';
import {IconDoubleRight} from '~/components/atoms/Icon';
import {
  LinkUsersHaveNumberedPage,
  LinkUsersReadingNumberedPage,
  LinkUsersReadNumberedPage,
  LinkUsersStackedNumberedPage,
  LinkUserWishNumberedPage,
} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  active: boolean;
};

export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  return (
    <BaseComponent
      {...props}
      Icon={({...props}) => <IconDoubleRight {...props} />}
    />
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
  }> = ({className, children, userName, number}) =>
    number ? (
      <LinkUsersHaveNumberedPage
        className={clsx(className)}
        username={userName}
        number={number}
      >
        {children}
      </LinkUsersHaveNumberedPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

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
  }> = ({className, children, userName, number}) =>
    number ? (
      <LinkUsersReadNumberedPage
        className={clsx(className)}
        username={userName}
        number={number}
      >
        {children}
      </LinkUsersReadNumberedPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

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
  }> = ({className, children, userName, number}) =>
    number ? (
      <LinkUsersReadingNumberedPage
        className={clsx(className)}
        username={userName}
        number={number}
      >
        {children}
      </LinkUsersReadingNumberedPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

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
  }> = ({className, children, userName, number}) =>
    number ? (
      <LinkUsersStackedNumberedPage
        className={clsx(className)}
        username={userName}
        number={number}
      >
        {children}
      </LinkUsersStackedNumberedPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

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
  }> = ({className, children, userName, number}) =>
    number ? (
      <LinkUserWishNumberedPage
        className={clsx(className)}
        username={userName}
        number={number}
      >
        {children}
      </LinkUserWishNumberedPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={Boolean(props.number)} />
    </Link>
  );
};
