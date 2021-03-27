import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Merge} from 'type-fest';

export type BaseComponentProps = Merge<
  ComponentProps,
  {
    i18n: Record<'label', string>;
    type: 'text' | 'password';
    placeholder?: string;
  }
>;
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  onChange,
  type,
  placeholder,
}) => (
  <label className={clsx(className, 'flex', 'flex-col')}>
    <span className={clsx('text-sm', 'text-gray-500', 'mb-2')}>
      {i18n.label}
    </span>
    {}
    <input
      className={clsx('px-4', 'py-2', 'shadow')}
      aria-label={i18n.label}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  </label>
);

export type ComponentProps = {
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export const UsernameInput: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      type="text"
      i18n={{label: t('common:unique_name')}}
      placeholder="sno2wman"
    />
  );
};

export const PasswordInput: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      type="password"
      i18n={{label: t('common:password')}}
    />
  );
};
