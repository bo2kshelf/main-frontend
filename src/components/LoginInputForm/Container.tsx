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
  const [status, setStatus] = useState<400 | 401 | 404 | 500 | undefined>();

  return (
    <Component
      {...props}
      status={status}
      loginDisabled={!username || !password}
      handleUserName={(event) => {
        setStatus(undefined); // eslint-disable-line unicorn/no-useless-undefined
        setUserName(event.target.value);
      }}
      handlePassword={(event) => {
        setStatus(undefined); // eslint-disable-line unicorn/no-useless-undefined
        setPassword(event.target.value);
      }}
      handleSubmit={async (event) => {
        event.preventDefault();
        if (!username || !password) return;

        const result = await fetch('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({username, password}),
        });
        if (result.status === 401 || result.status === 404) {
          setStatus(result.status);
          return;
        }
        if (result.status >= 500) {
          setStatus(500);
          return;
        }
        if (result.status >= 400) {
          setStatus(400);
          return;
        }
        router.push('/');
      }}
    />
  );
};
Container.displayName = 'LoginInputForm';
