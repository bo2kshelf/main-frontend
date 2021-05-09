import clsx from 'clsx';
import React from 'react';
import {useAuth} from '~/hooks/useAuth';
import {Popup} from '../../atoms/Popup';
import {PopupMenu} from '../PopupMenu';
import {PopupSummary} from '../PopupSummary';

export type ContainerProps = {
  className?: string;
};
export const Container: React.VFC<ContainerProps> = () => {
  const auth = useAuth();

  if ('currentUser' in auth)
    return (
      <Popup
        Summary={({className}) => (
          <PopupSummary
            className={clsx(className, 'w-12', 'h-12')}
            picture={auth.currentUser.picture}
          />
        )}
        Content={({className}) => (
          <PopupMenu
            currentUser={{
              userName: auth.currentUser.userName,
              displayName: auth.currentUser.displayName,
              picture: auth.currentUser.picture,
            }}
            className={clsx(className, 'w-80', 'shadow-md', 'mt-1', 'right-0')}
          />
        )}
      />
    );

  return (
    <div className={clsx()}>
      <p>Loading</p>
    </div>
  );
};
