import {
  faBook,
  faBookmark,
  faBookReader,
  faEye,
  faLayerGroup,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {useTranslation} from 'react-i18next';
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
      icon={faEye}
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
      icon={faBookReader}
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
      icon={faBook}
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
      icon={faBookmark}
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
      icon={faLayerGroup}
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
      icon={faStar}
      i18n={{text: t('common:wish_read_books'), count: `${count}`}}
    />
  );
};
