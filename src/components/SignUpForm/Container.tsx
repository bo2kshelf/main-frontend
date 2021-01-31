import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {graphqlSdk} from '~/lib/GraphQLRequest';
import {currentUserState} from '~/states/CurrentUser';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
  userId: string;
  initialValues: Partial<{
    userName: string;
    displayName: string;
    picture: string;
  }>;
};
export const Container: React.FC<ContainerProps> = ({
  userId,
  initialValues,
  ...props
}) => {
  const setCurrentUser = useSetRecoilState(currentUserState);
  const router = useRouter();

  const [userName, setUserName] = useState<string>(
    initialValues.userName || '',
  );
  const [displayName, setDisplayName] = useState<string>(
    initialValues.displayName || '',
  );
  const [picture, setPicture] = useState<string>(initialValues.picture || '');

  return (
    <Component
      {...props}
      userName={userName}
      displayName={displayName}
      picture={picture}
      onSubmit={(event) => {
        event.preventDefault();
        if (!(userId && userName && displayName && picture)) return;
        return graphqlSdk
          .SignUp({userId, userName, displayName, picture})
          .then(({createProfile}) => {
            setCurrentUser({id: userId, profile: createProfile});
            router.replace('/');
          });
      }}
      onUserNameHandler={(event) => {
        setUserName(event.target.value);
      }}
      onDisplayNameHandler={(event) => {
        setDisplayName(event.target.value);
      }}
    />
  );
};
Container.displayName = 'SignUpForm';
