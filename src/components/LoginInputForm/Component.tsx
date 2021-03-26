import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;

  handleUserName: React.ChangeEventHandler<HTMLInputElement>;
  handlePassword: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  handleUserName,
  handlePassword,
  handleSubmit,
  children,
}) => (
  <form className={clsx(className, 'flex', 'flex-col')}>
    <label>
      Username
      {}
      <input aria-label="Name" type="text" onChange={handleUserName} />
    </label>
    <label>
      Password
      {}
      <input aria-label="Password" type="password" onChange={handlePassword} />
    </label>
    <button type="submit" onClick={handleSubmit}>
      login
    </button>
  </form>
);
