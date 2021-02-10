import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = Omit<BaseComponentProps, 'i18n'> & {
  account: {displayName: string};
  records: {count: number};
};

export const HaveBooksHeader: React.FC<ComponentProps> = ({
  account: {displayName},
  records: {count},
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      isNone={count === 0}
      i18n={{
        count: t('計{{count}}冊', {count}),
        message: t(
          count > 0
            ? '{{name}}が持っている本'
            : '{{name}}はまだ持っている本を登録していません',
          {name: displayName},
        ),
      }}
    />
  );
};

export const ReadBooksHeader: React.FC<ComponentProps> = ({
  account: {displayName},
  records: {count},
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      isNone={count === 0}
      i18n={{
        count: t('計{{count}}冊', {count}),
        message: t(
          count > 0
            ? '{{name}}が読んだ本'
            : '{{name}}はまだ読んだ本を登録していません',
          {name: displayName},
        ),
      }}
    />
  );
};

export const ReadingBooksHeader: React.FC<ComponentProps> = ({
  account: {displayName},
  records: {count},
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      isNone={count === 0}
      i18n={{
        count: t('計{{count}}冊', {count}),
        message: t(
          count > 0
            ? '{{name}}が読んでいる本'
            : '{{name}}が読んでいる本は今ありません',
          {name: displayName},
        ),
      }}
    />
  );
};

export const StackedBooksHeader: React.FC<ComponentProps> = ({
  account: {displayName},
  records: {count},
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      isNone={count === 0}
      i18n={{
        count: t('計{{count}}冊', {count}),
        message: t(
          count > 0
            ? '{{name}}が積んでいる本'
            : '{{name}}が積んでいる本は今ありません',
          {name: displayName},
        ),
      }}
    />
  );
};

export const WishReadBooksHeader: React.FC<ComponentProps> = ({
  account: {displayName},
  records: {count},
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      isNone={count === 0}
      i18n={{
        count: t('計{{count}}冊', {count}),
        message: t(
          count > 0
            ? '{{name}}が読みたい本'
            : '{{name}}が読みたい本は今ありません',
          {name: displayName},
        ),
      }}
    />
  );
};
