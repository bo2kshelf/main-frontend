import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  children,
  disabled = false,
  onClick,
}) => (
  <button
    disabled={disabled}
    type="button"
    className={clsx(className)}
    onClick={onClick}
  >
    {children}
  </button>
);
