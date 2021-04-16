import clsx from 'clsx';
import React from 'react';
import {Popup} from './atoms/Popup';
import {LoginButton} from './molecules/LoginButton';
import {PopupMenu} from './molecules/PopupMenu';
import {PopupSummary} from './molecules/PopupSummary';

export type ComponentProps = {
  className?: string;
} & (
  | {
      userLoading: true;
    }
  | {
      userLoading: false;
      userLoggedIn: false;
    }
  | {
      userLoading: false;
      userLoggedIn: true;
      currentUser: {userName: string; displayName: string; picture: string};
    }
);
export const Component: React.FC<ComponentProps> = ({className, ...props}) => (
  <nav
    className={clsx(
      className,
      'bg-gray-700',
      'flex',
      'items-center',
      'shadow-xl',
    )}
  >
    <div
      className={clsx('container', 'mx-auto', 'px-12', 'flex', 'items-center')}
    >
      <div className={clsx('flex-grow')} />
      <div className={clsx()}>
        {props.userLoading && <span>Loading</span>}
        {!props.userLoading && !props.userLoggedIn && <LoginButton />}
        {!props.userLoading && props.userLoggedIn && (
          <Popup
            className={clsx('relative', 'select-none')}
            Summary={({className}) => (
              <PopupSummary
                className={clsx(className, 'w-12', 'h-12')}
                picture={props.currentUser.picture}
              />
            )}
            Content={({className}) => (
              <PopupMenu
                currentUser={props.currentUser}
                className={clsx(
                  className,
                  'w-80',
                  'shadow-md',
                  'mt-1',
                  'right-0',
                )}
              />
            )}
          />
        )}
      </div>
    </div>
  </nav>
);
