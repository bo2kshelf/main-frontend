import clsx from 'clsx';
import React from 'react';
import {useAuth} from '~/hooks/useAuth';
import {withAuth} from '../../../../../hoc/withAuth';
import {LoginButton} from '../LoginButton';
import {UserPopup} from '../UserPopup';

export type ContainerProps = {className?: string};
export const UnwrappedContainer: React.VFC<ContainerProps> = ({className}) => {
  const {signedIn} = useAuth();

  return (
    <div className={clsx(className)}>
      {!signedIn && <LoginButton />}
      {signedIn && <UserPopup className={clsx('relative', 'select-none')} />}
    </div>
  );
};

export const Container = withAuth(UnwrappedContainer, {});
