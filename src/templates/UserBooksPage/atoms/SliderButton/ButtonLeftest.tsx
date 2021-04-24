import clsx from 'clsx';
import React from 'react';
import {IconDoubleLeft} from '~/components/atoms/Icon';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  active: boolean;
  Link: React.FC<{
    className?: string;
  }>;
};

export const Component: React.VFC<ComponentProps> = ({
  Link,
  className,
  ...props
}) => {
  const Icon = ({...props}) => <IconDoubleLeft {...props} />;

  return props.active ? (
    <Link className={clsx(className)}>
      <BaseComponent {...props} className={clsx('w-full')} {...{Icon}} />
    </Link>
  ) : (
    <BaseComponent {...props} {...{Icon, className}} />
  );
};
