import {
  faBook,
  faBookmark,
  faBookReader,
  faLayerGroup,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {LinkProps} from 'next/link';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent} from '../CommonLink';

export type ComponentProps = {
  className?: string;
};

export type UserPageComponentProps = {
  className?: string;
  link: LinkProps['href'];
};

export const ReadBooksLinkComponent: React.FC<UserPageComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:read_books')}}
      icon={faBookmark}
    />
  );
};

export const ReadingBooksLinkComponent: React.FC<UserPageComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:reading_books')}}
      icon={faBookReader}
    />
  );
};

export const WishReadBooksLinkComponent: React.FC<UserPageComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:wish_read_books')}}
      icon={faStar}
    />
  );
};

export const StackedBooksLinkComponent: React.FC<UserPageComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:stacked_books')}}
      icon={faLayerGroup}
    />
  );
};

export const HaveBooksLinkComponent: React.FC<UserPageComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('common:have_books')}}
      icon={faBook}
    />
  );
};
