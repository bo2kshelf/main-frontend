import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent} from '../ReadingLineupSection';
import {MoreLikedBooksLink} from '../ReadingLineupSection/MoreLink';

export type ComponentProps = {
  className?: string;
  userName: string;
  displayName: string;
  books: {id: string; title: string; cover?: string}[];
  hasMore: boolean;
};
export const Component: React.FC<ComponentProps> = ({
  displayName,
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
      MoreLink={MoreLikedBooksLink}
    />
  );
};
