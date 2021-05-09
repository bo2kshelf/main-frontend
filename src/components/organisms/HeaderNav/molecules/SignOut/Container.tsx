import clsx from 'clsx';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {IconLogout} from '~/components/atoms/Icon';
import {useSignOut} from '~/hooks/useSignOut';

export type BaseComponentProps = {
  className?: string;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({className}) => {
  const {t} = useTranslation();

  const signOut = useSignOut();

  const onClick = async () => {
    signOut();
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        className,
        'group',
        'bg-white',
        'hover:bg-blue-500',
        'bg-opacity-90',
        'hover:bg-opacity-80',
        'px-4',
        'py-3',
        'flex',
        'items-center',
      )}
    >
      <IconLogout
        className={clsx(
          'text-xs',
          'mr-2',
          'text-gray-400',
          'group-hover:text-white',
        )}
      />
      <span
        className={clsx(
          'text-sm',
          'whitespace-nowrap',
          'text-black',
          'group-hover:text-white',
        )}
      >
        {t('common:logout')}
      </span>
    </div>
  );
};
