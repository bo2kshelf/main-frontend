import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseComponent, BaseComponentProps} from './BaseComponent';

export type ComponentProps = Omit<BaseComponentProps, 'i18n'> & {
  total: number;
  from: number;
  to: number;
};
export const Component: React.FC<ComponentProps> = ({
  from,
  to,
  total,
  ...props
}) => {
  const {t} = useTranslation();
  return (
    <BaseComponent
      {...props}
      i18n={{
        message: t('{{total}}件中{{from}}件から{{to}}件までを表示中', {
          total,
          from,
          to,
        }),
      }}
    />
  );
};