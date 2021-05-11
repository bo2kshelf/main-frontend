import {NextPage} from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import {ThirdPartyAuth} from 'supertokens-auth-react/recipe/thirdparty';

export function withPageAuthenticated<P>(Page: NextPage<P>) {
  const WithProtectedPage = (props: P) => {
    return (
      <ThirdPartyAuth requireAuth>
        <Page {...props} />
      </ThirdPartyAuth>
    );
  };
  return dynamic(async () => WithProtectedPage, {ssr: false});
}
