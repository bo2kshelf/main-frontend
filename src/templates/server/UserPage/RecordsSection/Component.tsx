import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent} from './BaseComponent';
import {
  HaveHeader,
  HeaderProps,
  ReadHeader,
  ReadingHeader,
  StackedHeader,
} from './Header';

export type ComponentProps = {
  className?: string;
  user: HeaderProps['user'];
  records: {
    book: {id: string; title: string; cover: string | null};
  }[];
  hasNext: boolean;
};

export const ReadRecordsSection: React.FC<ComponentProps> = ({
  user,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      user={user}
      Header={ReadHeader}
      i18n={{
        noRecord: t('{{name}}はまだ読んだ本を登録していません', {
          name: user.displayName,
        }),
      }}
    />
  );
};

export const ReadingRecordsSection: React.FC<ComponentProps> = ({
  user,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Header={ReadingHeader}
      user={user}
      i18n={{
        noRecord: t('{{name}}が読んでいる本は今ありません', {
          name: user.displayName,
        }),
      }}
    />
  );
};

export const HaveRecordsSection: React.FC<ComponentProps> = ({
  user,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Header={HaveHeader}
      user={user}
      i18n={{
        noRecord: t('{{name}}はまだ持っている本を登録していません', {
          name: user.displayName,
        }),
      }}
    />
  );
};

export const StackedRecordsSection: React.FC<ComponentProps> = ({
  user,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      Header={StackedHeader}
      user={user}
      i18n={{
        noRecord: t('{{name}}が積んでいる本は今ありません', {
          name: user.displayName,
        }),
      }}
    />
  );
};
