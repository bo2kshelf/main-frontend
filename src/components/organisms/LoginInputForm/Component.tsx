import clsx from 'clsx';
import React from 'react';
import {PasswordInput, UsernameInput} from './molecules/Input';
import {LoginButton} from './molecules/LoginButton';
import {StatusText} from './molecules/StatusText';

export type ComponentProps = {
  className?: string;

  handleUserName: React.ChangeEventHandler<HTMLInputElement>;
  handlePassword: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;

  loginDisabled: boolean;

  status?: 400 | 401 | 404 | 500;
};
export const Component: React.FC<ComponentProps> = ({
  className,
  loginDisabled,

  handleUserName,
  handlePassword,
  handleSubmit,
  status,
}) => (
  <form className={clsx(className, 'flex', 'flex-col')}>
    <UsernameInput className={clsx()} onChange={handleUserName} />
    <PasswordInput className={clsx('mt-4')} onChange={handlePassword} />
    <LoginButton
      className={clsx('mt-8')}
      onClick={handleSubmit}
      disabled={loginDisabled}
    />
    {status && (
      <StatusText
        className={clsx('mt-2', 'w-full', 'text-center')}
        status={status}
      />
    )}
  </form>
);
