import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {LinkUsersLikedPage, LinkUsersReadingPage} from '~/atoms/Link';

export type BaseComponentProps = {
  className?: string;
  i18n: Record<'text', string>;
  userName: string;
  Link: typeof LinkUsersReadingPage | typeof LinkUsersLikedPage;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  i18n,
  userName,
  Link,
}) => (
  <Link
    username={userName}
    className={clsx(
      className,
      'py-1',
      'px-3',
      'text-sm',
      'rounded-lg',
      'text-white',
      'bg-blue-400',
      'hover:bg-blue-500',
      'whitespace-nowrap',
    )}
  >
    {i18n.text}
  </Link>
);

export type ComponentProps = {className?: string; userName: string};
export const MoreReadingBooksComponent: React.FC<ComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('もっと見る')}}
      Link={LinkUsersReadingPage}
    />
  );
};

export const MoreLikedBooksComponent: React.FC<ComponentProps> = ({
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{text: t('もっと見る')}}
      Link={LinkUsersLikedPage}
    />
  );
};
