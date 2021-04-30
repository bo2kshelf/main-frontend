import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkUsersRecordsNumberedPage} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  userName: string;
  pageNumber: number;
};
export const Component: React.VFC<ComponentProps> = ({
  pageNumber,
  userName,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      {...{pageNumber: pageNumber + 1}}
      i18n={{text: t('もっと昔の記録')}}
      Link={({...props}) => (
        <LinkUsersRecordsNumberedPage
          {...props}
          {...{username: userName, number: pageNumber + 1}}
        />
      )}
    />
  );
};
