import dynamic from 'next/dynamic';
import React from 'react';
import {ThirdPartyAuth} from 'supertokens-auth-react/recipe/thirdparty';

export function withComponentAuthenticated<P>(Component: React.FC<P>) {
  const WithComponentAuthenticated = (props: P) => (
    <ThirdPartyAuth requireAuth={false}>
      <Component {...props} />
    </ThirdPartyAuth>
  );
  return dynamic(async () => WithComponentAuthenticated, {ssr: false});
}
