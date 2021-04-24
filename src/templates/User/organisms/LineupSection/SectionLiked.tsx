import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkUsersReadingIndexPage} from '~/components/atoms/Link';
import {MoreDetailsLink} from '~/components/atoms/MoreDetailsLink';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  userName: string;
  displayName: string;
  books: {id: string; title: string; cover?: string}[];
  hasMore: boolean;
};
export const Component: React.FC<ComponentProps> = ({
  userName,
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
      MoreLink={() => (
        <MoreDetailsLink
          Link={(props) => (
            <LinkUsersReadingIndexPage {...props} {...{username: userName}} />
          )}
        />
      )}
    />
  );
};

export type ContainerProps = {
  className?: string;
  displayName: string;
  userName: string;
  likedBooks: {
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
  };
};
export const Container: React.FC<ContainerProps> = ({likedBooks, ...props}) => {
  return (
    <Component
      {...props}
      books={likedBooks.books}
      hasMore={likedBooks.hasNext}
    />
  );
};
