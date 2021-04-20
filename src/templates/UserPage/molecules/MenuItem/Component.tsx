import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  IconHaveBooks,
  IconLikedBooks,
  IconReadBooks,
  IconReadingBooks,
  IconRecord,
  IconStackedBooks,
  IconWishReadBooks,
} from '~/components/atoms/Icon';
import {
  LinkUsersHavePage,
  LinkUsersLikedPage,
  LinkUsersReadingPage,
  LinkUsersReadPage,
  LinkUsersRecordsPage,
  LinkUsersStackedPage,
  LinkUserWishPage,
} from '~/components/atoms/Link';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  userName: string;
  count: number;
};
export const ReadRecordsComponent: React.FC<ComponentProps> = ({
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Icon={IconRecord}
      Link={LinkUsersRecordsPage}
      i18n={{text: t('common:read_records'), count: `${count}`}}
    />
  );
};
export const ReadingBooksComponent: React.FC<ComponentProps> = ({
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Icon={IconReadingBooks}
      Link={LinkUsersReadingPage}
      i18n={{text: t('common:reading_books'), count: `${count}`}}
    />
  );
};
export const HaveBooksComponent: React.FC<ComponentProps> = ({
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Icon={IconHaveBooks}
      Link={LinkUsersHavePage}
      i18n={{text: t('common:have_books'), count: `${count}`}}
    />
  );
};
export const ReadBooksComponent: React.FC<ComponentProps> = ({
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Icon={IconReadBooks}
      Link={LinkUsersReadPage}
      i18n={{text: t('common:read_books'), count: `${count}`}}
    />
  );
};
export const StackedBooksComponent: React.FC<ComponentProps> = ({
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Link={LinkUsersStackedPage}
      Icon={IconStackedBooks}
      i18n={{text: t('common:stacked_books'), count: `${count}`}}
    />
  );
};
export const WishReadBooksComponent: React.FC<ComponentProps> = ({
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Link={LinkUserWishPage}
      Icon={IconWishReadBooks}
      i18n={{text: t('common:wish_read_books'), count: `${count}`}}
    />
  );
};
export const LikedBooksComponent: React.FC<ComponentProps> = ({
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Link={LinkUsersLikedPage}
      Icon={IconLikedBooks}
      i18n={{text: t('common:liked_books'), count: `${count}`}}
    />
  );
};
