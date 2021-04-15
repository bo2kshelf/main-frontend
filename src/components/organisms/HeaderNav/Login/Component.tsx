import React from 'react';
import {useTranslation} from 'react-i18next';
import {NormalButtonBlue} from '~/components/atoms/Button';
import {IconLogin} from '~/components/atoms/Icon/Component';

export type ComponentProps = {className?: string};
export const Component: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <NormalButtonBlue {...props} text={t('common:login')} Icon={IconLogin} />
  );
};
