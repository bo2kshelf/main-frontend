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
} from '~/atoms/Icon';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  userName: string;
  count: number;
};
export const ReadRecordsComponent: React.FC<ComponentProps> = ({
  userName,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      href={`/users/${userName}/records`}
      icon={IconRecord}
      i18n={{text: t('common:read_records'), count: `${count}`}}
    />
  );
};
export const ReadingBooksComponent: React.FC<ComponentProps> = ({
  userName,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      href={`/users/${userName}/reading`}
      icon={IconReadingBooks}
      i18n={{text: t('common:reading_books'), count: `${count}`}}
    />
  );
};
export const HaveBooksComponent: React.FC<ComponentProps> = ({
  userName,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      href={`/users/${userName}/have`}
      icon={IconHaveBooks}
      i18n={{text: t('common:have_books'), count: `${count}`}}
    />
  );
};
export const ReadBooksComponent: React.FC<ComponentProps> = ({
  userName,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      href={`/users/${userName}/stacked`}
      icon={IconReadBooks}
      i18n={{text: t('common:read_books'), count: `${count}`}}
    />
  );
};
export const StackedBooksComponent: React.FC<ComponentProps> = ({
  userName,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      href={`/users/${userName}/records`}
      icon={IconStackedBooks}
      i18n={{text: t('common:stacked_books'), count: `${count}`}}
    />
  );
};
export const WishReadBooksComponent: React.FC<ComponentProps> = ({
  userName,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      href={`/users/${userName}/wish`}
      icon={IconWishReadBooks}
      i18n={{text: t('common:wish_read_books'), count: `${count}`}}
    />
  );
};
export const LikedBooksComponent: React.FC<ComponentProps> = ({
  userName,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      href={`/users/${userName}/liked`}
      icon={IconLikedBooks}
      i18n={{text: t('common:liked_books'), count: `${count}`}}
    />
  );
};
