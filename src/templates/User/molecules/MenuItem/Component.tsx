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
  LinkUsersHaveIndexPage,
  LinkUsersLikedIndexPage,
  LinkUsersReadIndexPage,
  LinkUsersReadingIndexPage,
  LinkUsersRecordsIndexPage,
  LinkUsersStackedIndexPage,
  LinkUserWishIndexPage,
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
      Link={LinkUsersRecordsIndexPage}
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
      Link={LinkUsersReadingIndexPage}
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
      Link={LinkUsersHaveIndexPage}
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
      Link={LinkUsersReadIndexPage}
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
      Link={LinkUsersStackedIndexPage}
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
      Link={LinkUserWishIndexPage}
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
      Link={LinkUsersLikedIndexPage}
      Icon={IconLikedBooks}
      i18n={{text: t('common:liked_books'), count: `${count}`}}
    />
  );
};
