import clsx from 'clsx';
import React from 'react';
import {NormalButtonBase} from './BaseComponent';

export const NormalButtonBlueComponent: typeof NormalButtonBase = ({
  className,
  ...props
}) => (
  <NormalButtonBase
    className={clsx(
      className,
      'bg-blue-400',
      'hover:bg-blue-500',
      'text-white',
    )}
    {...props}
  />
);
