import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconPublishedAt} from '~/components/atoms/Icon';
import {ReadAt} from '~/components/atoms/ReadAt';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  readAt?: string;
};
export const Component: React.VFC<ComponentProps> = ({readAt, ...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Icon={IconPublishedAt}
      i18n={{title: t('記録した日')}}
      Body={({className}) => (
        <ReadAt className={clsx(className)} readAt={readAt} />
      )}
    />
  );
};
