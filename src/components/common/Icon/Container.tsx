import clsx from 'clsx';
import NextImage from 'next/image';
import React from 'react';

export type IconProps = {
  className?: string;
  picture: string;
};
export const Icon: React.FC<IconProps> = ({className, picture}) => (
  <div
    className={clsx(className, 'relative', 'overflow-hidden', 'rounded-full')}
  >
    <NextImage className={clsx()} src={picture} width={256} height={256} />
  </div>
);
