import {NextPage} from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import {ThirdPartyAuth} from 'supertokens-auth-react/recipe/thirdparty';

export function withPageAuthenticated<T>(Page: NextPage<T>) {
  return dynamic(
    async () => {
      const ProtectedPage = (props: T) => (
        <ThirdPartyAuth requireAuth>
          <Page {...props} />
        </ThirdPartyAuth>
      );
      return ProtectedPage;
    },
    {ssr: false},
  );
}
