import clsx from 'clsx';
import React from 'react';
import {IconRight} from '~/components/atoms/Icon';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  number?: number;
  Link: React.FC<{
    className?: string;
    number: number;
  }>;
};

export const Component: React.VFC<ComponentProps> = ({
  Link,
  className,
  ...props
}) => {
  const Icon = ({...props}) => <IconRight {...props} />;
  return props.number ? (
    <Link className={clsx(className)} number={props.number}>
      <BaseComponent
        {...props}
        className={clsx('w-full')}
        {...{active: true, Icon}}
      />
    </Link>
  ) : (
    <BaseComponent {...props} {...{className, active: false, Icon}} />
  );
};
