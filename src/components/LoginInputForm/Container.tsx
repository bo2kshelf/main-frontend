import fetch from 'isomorphic-unfetch';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {Component} from './Component';

export type ContainerProps = {
  className?: string;
};
export const Container: React.FC<ContainerProps> = ({...props}) => {
  const router = useRouter();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Component
      {...props}
      handleUserName={(event) => setUserName(event.target.value)}
      handlePassword={(event) => setPassword(event.target.value)}
      handleSubmit={async (event) => {
        event.preventDefault();
        if (!username || !password) return;

        const result = await fetch('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({username, password}),
        });
        if (result.status >= 500) return;
        if (result.status >= 400) return;
        router.push('/');
      }}
    />
  );
};
Container.displayName = 'LoginInputForm';
