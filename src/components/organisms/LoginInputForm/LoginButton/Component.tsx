import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';

export type BaseComponentProps = Merge<
  ComponentProps,
  {i18n: Record<'disable' | 'login', string>}
>;
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  disabled,
  onClick,
  i18n,
}) => (
  <button
    className={clsx(
      className,
      'px-2',
      'py-3',
      'rounded-lg',
      'bg-blue-400',
      'disabled:bg-gray-400',
      'disabled:cursor-default',
      'text-white',
    )}
    type="submit"
    onClick={onClick}
    disabled={disabled}
  >
    {disabled && i18n.disable}
    {!disabled && i18n.login}
  </button>
);

export type ComponentProps = {
  className?: string;

  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();

  return (
    <BaseComponent
      {...props}
      i18n={{
        disable: t('必要な情報を入力してください'),
        login: t('common:login'),
      }}
    />
  );
};
