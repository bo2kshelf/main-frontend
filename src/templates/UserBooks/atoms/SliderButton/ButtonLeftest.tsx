import clsx from 'clsx';
import React from 'react';
import {IconDoubleLeft} from '~/components/atoms/Icon';
import {
  LinkUsersHaveIndexPage,
  LinkUsersReadIndexPage,
  LinkUsersReadingIndexPage,
  LinkUsersStackedIndexPage,
  LinkUserWishIndexPage,
} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  active: boolean;
};

export const Component: React.VFC<ComponentProps> = ({...props}) => {
  return (
    <BaseComponent
      {...props}
      Icon={({...props}) => <IconDoubleLeft {...props} />}
    />
  );
};

export type ContainerProps = {
  className?: string;
  userName: string;
  active: boolean;
};
export const ContainerHave: React.VFC<ContainerProps> = ({
  userName,
  ...props
}) => {
  const Link: React.FC<{className?: string; active: boolean}> = ({
    className,
    children,
    active,
  }) =>
    active ? (
      <LinkUsersHaveIndexPage className={clsx(className)} username={userName}>
        {children}
      </LinkUsersHaveIndexPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={props.active} />
    </Link>
  );
};

export const ContainerRead: React.VFC<ContainerProps> = ({
  userName,
  ...props
}) => {
  const Link: React.FC<{className?: string; active: boolean}> = ({
    className,
    children,
    active,
  }) =>
    active ? (
      <LinkUsersReadIndexPage className={clsx(className)} username={userName}>
        {children}
      </LinkUsersReadIndexPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={props.active} />
    </Link>
  );
};

export const ContainerReading: React.VFC<ContainerProps> = ({
  userName,
  ...props
}) => {
  const Link: React.FC<{className?: string; active: boolean}> = ({
    className,
    children,
    active,
  }) =>
    active ? (
      <LinkUsersReadingIndexPage
        className={clsx(className)}
        username={userName}
      >
        {children}
      </LinkUsersReadingIndexPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={props.active} />
    </Link>
  );
};

export const ContainerStacked: React.VFC<ContainerProps> = ({
  userName,
  ...props
}) => {
  const Link: React.FC<{className?: string; active: boolean}> = ({
    className,
    children,
    active,
  }) =>
    active ? (
      <LinkUsersStackedIndexPage
        className={clsx(className)}
        username={userName}
      >
        {children}
      </LinkUsersStackedIndexPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={props.active} />
    </Link>
  );
};

export const ContainerWishRead: React.VFC<ContainerProps> = ({
  userName,
  ...props
}) => {
  const Link: React.FC<{className?: string; active: boolean}> = ({
    className,
    children,
    active,
  }) =>
    active ? (
      <LinkUserWishIndexPage className={clsx(className)} username={userName}>
        {children}
      </LinkUserWishIndexPage>
    ) : (
      <div className={clsx(className)}>{children}</div>
    );

  return (
    <Link {...props}>
      <Component className={clsx('w-full')} active={props.active} />
    </Link>
  );
};
