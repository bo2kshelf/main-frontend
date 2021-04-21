import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkUsersLikedPage} from '~/components/atoms/Link';
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
        title: t('{{name}}が読んでいる本', {name: displayName}),
        titleEmpty: t('{{name}}が読んでいる本はありません', {
          name: displayName,
        }),
      }}
      MoreLink={() => (
        <MoreDetailsLink
          Link={(props) => (
            <LinkUsersLikedPage {...props} {...{username: userName}} />
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
  readingBooks: {
    books: {id: string; title: string; cover?: string}[];
    hasNext: boolean;
  };
};
export const Container: React.FC<ContainerProps> = ({
  readingBooks,
  ...props
}) => {
  return (
    <Component
      {...props}
      books={readingBooks.books}
      hasMore={readingBooks.hasNext}
    />
  );
};
