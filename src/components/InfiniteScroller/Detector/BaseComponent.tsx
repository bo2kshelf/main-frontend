import {
  faCaretSquareDown,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type BaseComponentProps = {
  className?: string;
  loading: boolean;
  i18n: Record<'loading' | 'unloading', string>;
};

export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  loading,
  i18n,
}) => (
  <div
    className={clsx(
      className,
      'flex',
      'justify-center',
      'items-center',
      'py-4',
    )}
  >
    {loading && (
      <>
        <FontAwesomeIcon
          className={clsx('text-blue-500', 'text-lg')}
          icon={faCircleNotch}
          spin
        />
        <span className={clsx('ml-2')}>{i18n.loading}</span>
      </>
    )}
    {!loading && (
      <>
        <FontAwesomeIcon
          className={clsx('text-blue-500', 'text-lg')}
          icon={faCaretSquareDown}
        />
        <span className={clsx('ml-2')}>{i18n.unloading}</span>
      </>
    )}
  </div>
);
