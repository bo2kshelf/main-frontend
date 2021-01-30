import clsx from 'clsx';
import React from 'react';
import {Icon} from '../common/Icon';
import {SignUpButton} from './Button';
import {TextInput} from './TextInput';

export type BaseComponentProps = {
  className?: string;

  userName: string;
  displayName: string;
  picture: string;
  onSubmit: React.DOMAttributes<HTMLFormElement>['onSubmit'];
  onUserNameHandler: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  onDisplayNameHandler: BaseComponentProps['onUserNameHandler'];

  i18n: Record<
    | 'userName'
    | 'userNamePlaceholder'
    | 'displayName'
    | 'displayNamePlaceholder'
    | 'submit',
    string
  >;
};
export const BaseComponent: React.FC<BaseComponentProps> = ({
  className,
  userName,
  displayName,
  picture,
  onSubmit,
  onUserNameHandler,
  onDisplayNameHandler,
  i18n,
}) => (
  <form
    className={clsx(
      className,
      'flex',
      'shadow-lg',
      'rounded',
      'overflow-hidden',
    )}
    onSubmit={onSubmit}
  >
    <div
      className={clsx(
        'w-52',
        'flex',
        'items-center',
        'justify-center',
        'bg-gray-700',
      )}
    >
      <div className={clsx('w-16', 'h-16')}>
        <Icon picture={picture} className={clsx('w-full', 'h-full')} />
      </div>
    </div>
    <div
      className={clsx(
        'flex-grow',
        'px-8',
        'py-6',
        'grid',
        'grid-cols-2',
        'gap-y-6',
        'bg-white',
      )}
    >
      <div className={clsx('col-span-full')}>
        <TextInput
          className={clsx()}
          title={i18n.userName}
          placeholder={i18n.userNamePlaceholder}
          a11y="user_name"
          value={userName}
          handler={onUserNameHandler}
        />
      </div>
      <div className={clsx('col-span-full')}>
        <TextInput
          className={clsx()}
          title={i18n.displayName}
          placeholder={i18n.displayNamePlaceholder}
          a11y="display_name"
          value={displayName}
          handler={onDisplayNameHandler}
        />
      </div>
      <div className={clsx('col-span-full', 'flex', 'justify-center')}>
        <SignUpButton text={i18n.submit} />
      </div>
    </div>
  </form>
);
