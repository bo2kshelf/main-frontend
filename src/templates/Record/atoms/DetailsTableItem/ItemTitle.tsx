import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconBook} from '~/components/atoms/Icon';
import {LinkBooksIndexPage} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  id: string;
  title: string;
  subtitle?: string;
};
export const Component: React.VFC<ComponentProps> = ({
  id,
  title,
  subtitle,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Icon={IconBook}
      i18n={{title: t('読んだ本')}}
      Body={({className}) => (
        <LinkBooksIndexPage className={clsx(className, 'break-normal')} id={id}>
          <span className={clsx('font-bold')}>{title}</span>
          {subtitle && (
            <span className={clsx('ml-1', 'text-gray-600')}>{subtitle}</span>
          )}
        </LinkBooksIndexPage>
      )}
    />
  );
};
