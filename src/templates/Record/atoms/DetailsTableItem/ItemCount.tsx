import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconCount} from '~/components/atoms/Icon';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  count: number;
};
export const Component: React.VFC<ComponentProps> = ({count, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Icon={IconCount}
      i18n={{title: t('読んだ回数')}}
      Body={({className}) => (
        <span className={clsx(className)}>{t('format:count', {count})}</span>
      )}
    />
  );
};
