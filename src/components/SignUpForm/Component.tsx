import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = Omit<BaseComponentProps, 'i18n'>;
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();

  return (
    <BaseComponent
      {...props}
      i18n={{
        userName: t('common:user_name'),
        userNamePlaceholder: t('signup.user_name_placeholder'),
        displayName: t('common:display_name'),
        displayNamePlaceholder: t('signup.display_name_placeholder'),
        submit: t('common:sign_up'),
      }}
    />
  );
};
