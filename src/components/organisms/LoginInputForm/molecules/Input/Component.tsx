import React from 'react';
import {useTranslation} from 'react-i18next';
import {Input} from '../../atoms/Input';

export type ComponentProps = {
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export const UsernameInput: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <Input
      {...props}
      type="text"
      i18n={{
        label: t('common:unique_name'),
      }}
      placeholder="sno2wman"
    />
  );
};

export const PasswordInput: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <Input
      {...props}
      type="password"
      i18n={{
        label: t('common:password'),
      }}
    />
  );
};
