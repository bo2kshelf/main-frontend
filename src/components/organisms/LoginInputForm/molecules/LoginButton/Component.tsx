import React from 'react';
import {useTranslation} from 'react-i18next';
import {NormalButtonBlue} from '~/components/atoms/Button';
import {IconLogin, IconWarning} from '~/components/atoms/Icon/Component';

export type ComponentProps = {
  className?: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
export const Component: React.FC<ComponentProps> = ({disabled, ...props}) => {
  const {t} = useTranslation();

  const text = disabled ? t('必要な情報を入力してください') : t('common:login');
  const Icon = disabled ? IconWarning : IconLogin;
  return (
    <NormalButtonBlue {...props} disabled={disabled} Icon={Icon} text={text} />
  );
};
