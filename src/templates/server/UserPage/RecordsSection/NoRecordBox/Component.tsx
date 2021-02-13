import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  user: {displayName: string};
};

export const ReadRecordsNoBox: React.FC<ComponentProps> = ({
  user,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        noRecord: t('{{name}}はまだ読んだ本を登録していません', {
          name: user.displayName,
        }),
      }}
    />
  );
};

export const ReadingRecordsNoBox: React.FC<ComponentProps> = ({
  user,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        noRecord: t('{{name}}が読んでいる本は今ありません', {
          name: user.displayName,
        }),
      }}
    />
  );
};

export const HaveRecordsNoBox: React.FC<ComponentProps> = ({
  user,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        noRecord: t('{{name}}はまだ持っている本を登録していません', {
          name: user.displayName,
        }),
      }}
    />
  );
};

export const StackedRecordsNoBox: React.FC<ComponentProps> = ({
  user,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        noRecord: t('{{name}}が積んでいる本は今ありません', {
          name: user.displayName,
        }),
      }}
    />
  );
};
