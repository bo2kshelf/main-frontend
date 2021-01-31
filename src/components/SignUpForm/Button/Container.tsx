import clsx from 'clsx';
import React from 'react';

export type ContainerProps = {
  className?: string;
  text: string;
};
export const Container: React.FC<ContainerProps> = ({className, text}) => (
  <button
    className={clsx(
      className,
      'bg-blue-400',
      'hover:bg-blue-500',
      'text-white',
      'px-4',
      'py-2',
      'rounded-md',
    )}
    type="submit"
  >
    {text}
  </button>
);
