import {NextPage} from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import {EmailPasswordAuth} from 'supertokens-auth-react/recipe/emailpassword';

export function withPageAuthenticated<T>(Page: NextPage<T>) {
  return dynamic(
    async () => {
      const ProtectedPage = (props: T) => (
        <EmailPasswordAuth requireAuth>
          <Page {...props} />
        </EmailPasswordAuth>
      );
      return ProtectedPage;
    },
    {ssr: false},
  );
}
