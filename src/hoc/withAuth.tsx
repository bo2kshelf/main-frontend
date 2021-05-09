import dynamic from 'next/dynamic';
import React from 'react';
import {EmailPasswordAuth} from 'supertokens-auth-react/recipe/emailpassword';

export function withAuth<T>(
  Component: React.VFC<T>,
  {requiredAuth = false}: {requiredAuth?: boolean},
) {
  return dynamic(
    async () => {
      const AuthProvidedComponent = (props: T) => (
        <EmailPasswordAuth requireAuth={requiredAuth}>
          <Component {...props} />
        </EmailPasswordAuth>
      );
      return AuthProvidedComponent;
    },
    {ssr: false},
  );
}
