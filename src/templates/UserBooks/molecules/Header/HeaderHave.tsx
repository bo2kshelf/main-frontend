import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent} from './BaseComponent';

export type ComponentProps = {
  className?: string;
  displayName: string;
  count: number;
};

export const Component: React.FC<ComponentProps> = ({
  displayName,
  count,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      isNone={count === 0}
      i18n={{
        count: t('計{{count}}冊', {count}),
        message:
          count > 0
            ? t('{{name}}が持っている本', {name: displayName})
            : t('{{name}}はまだ持っている本を登録していません', {
                name: displayName,
              }),
      }}
    />
  );
};
