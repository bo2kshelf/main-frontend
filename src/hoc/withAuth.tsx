import dynamic from 'next/dynamic';
import React from 'react';
import {ThirdPartyAuth} from 'supertokens-auth-react/recipe/thirdparty';

export function withAuth<T>(
  Component: React.VFC<T>,
  {requiredAuth = false}: {requiredAuth?: boolean},
) {
  return dynamic(
    async () => {
      const AuthProvidedComponent = (props: T) => (
        <ThirdPartyAuth requireAuth={requiredAuth}>
          <Component {...props} />
        </ThirdPartyAuth>
      );
      return AuthProvidedComponent;
    },
    {ssr: false},
  );
}
