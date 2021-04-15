import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  IconHaveBooks,
  IconReadBooks,
  IconReadingBooks,
  IconStackedBooks,
  IconWishReadBooks,
} from '~/atoms/Icon';
import {IconLogout, IconSettings} from '~/atoms/Icon/Component';
import {
  LinkLogoutPage,
  LinkMeHavePage,
  LinkMeReadingPage,
  LinkMeReadPage,
  LinkMeStackedPage,
  LinkMeWishPage,
  LinkSettingPage,
} from '~/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
};

export const ItemSettingsComponent: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:settings')}}
      Icon={IconSettings}
      Link={LinkSettingPage}
    />
  );
};

export const ItemLogoutComponent: React.FC<ComponentProps> = ({...props}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:logout')}}
      Icon={IconLogout}
      Link={LinkLogoutPage}
    />
  );
};

export const ItemReadBooksComponent: React.FC<ComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:read_books')}}
      Link={LinkMeReadPage}
      Icon={IconReadBooks}
    />
  );
};

export const ItemReadingBooksComponent: React.FC<ComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:reading_books')}}
      Link={LinkMeReadingPage}
      Icon={IconReadingBooks}
    />
  );
};

export const ItemWishReadBooksComponent: React.FC<ComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:wish_read_books')}}
      Link={LinkMeWishPage}
      Icon={IconWishReadBooks}
    />
  );
};

export const ItemStackedBooksComponent: React.FC<ComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:stacked_books')}}
      Link={LinkMeStackedPage}
      Icon={IconStackedBooks}
    />
  );
};

export const ItemHaveBooksComponent: React.FC<ComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:have_books')}}
      Link={LinkMeHavePage}
      Icon={IconHaveBooks}
    />
  );
};