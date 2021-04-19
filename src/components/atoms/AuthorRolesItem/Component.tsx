import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {AuthorRole} from '~/lib/AuthorRole';

export type ComponentProps = {
  className?: string;
  role: AuthorRole;
};

export const Component: React.VFC<ComponentProps> = ({
  className,
  role,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <span {...props} className={clsx(className)}>
      {((role: AuthorRole) => {
        switch (role) {
          case AuthorRole.Author:
            return t('roles:author', {context: 'short'});
          case AuthorRole.OriginalAuthor:
            return t('roles:original_author', {context: 'short'});
          case AuthorRole.Supervisor:
            return t('roles:supervisor', {context: 'short'});
          case AuthorRole.Participant:
            return t('roles:participant', {context: 'short'});
          case AuthorRole.Editor:
            return t('roles:editor', {context: 'short'});
          case AuthorRole.Illustrator:
            return t('roles:illustrator', {context: 'short'});
          case AuthorRole.ComicArtist:
            return t('roles:comic_artist', {context: 'short'});
          case AuthorRole.Translator:
            return t('roles:translator', {context: 'short'});
          case AuthorRole.TranslateSupervisor:
            return t('roles:translate_supervisor', {context: 'short'});
        }
      })(role)}
    </span>
  );
};
