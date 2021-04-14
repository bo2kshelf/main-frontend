import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent} from '../ReadingLineupSection';

export type ComponentProps = {
  className?: string;
  userName: string;
  displayName: string;
  books: {id: string; title: string; cover?: string}[];
  hasMore: boolean;
};
export const Component: React.FC<ComponentProps> = ({
  displayName,
  userName,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        title: t('{{name}}が好きな本', {name: displayName}),
        titleEmpty: t('{{name}}が好きな本はありません', {
          name: displayName,
        }),
      }}
      moreLink={`/users/${userName}/liked`}
    />
  );
};
